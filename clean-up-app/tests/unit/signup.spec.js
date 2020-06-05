import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';
import firebase from '@/firebase';
import notificaciones from '@/helpers/notificaciones';

jest.mock('../../src/helpers/authErrors.js', () =>
	jest.fn(() => 'AUTH ERRORS')
);

jest.mock('../../src/helpers/notificaciones.js', () => ({
	warning: jest.fn(),
	success: jest.fn()
}));

jest.mock('../../src/firebase.js', () => ({
	auth: {
		createUserWithEmailAndPassword: jest.fn()
	},
	db: {
		collection: jest.fn(() => {
			return {
				doc: jest.fn(() => {
					return {
						set: jest.fn()
					};
				})
			};
		})
	}
}));

// Tal vez se podría simplificar o meter varios expect por test, ya que son +8 tests solo para el estado del botón

describe('Estado del botón de crear cuenta', () => {
	const correoInvalido = 'abc',
		correoValido = 'correoValido@gmail.com',
		passwordInvalida = 'abc',
		passwordValida = 'passwordValida',
		nombreInvalido = 'ab',
		nombreValido = 'Bob';

	it('El botón de crear cuenta está deshabilitado si no hay datos', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link']
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('El botón de crear cuenta está deshabilitado si hay datos inválidos y no se ha aceptado el GDPR', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: nombreInvalido,
					email: correoInvalido,
					pass: passwordInvalida,
					gdpr: false
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('El botón de crear cuenta está deshabilitado si hay datos válidos y no se ha aceptado el GDPR', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: nombreValido,
					email: correoValido,
					pass: passwordValida,
					gdpr: false
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si el nombre de usuario es invalido y los demás datos son válidos', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: nombreInvalido,
					email: correoValido,
					pass: passwordValida,
					gdpr: true
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si el correo es invalido y los demás datos son válidos', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: nombreValido,
					email: correoInvalido,
					pass: passwordValida,
					gdpr: true
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si la contraseña es invalida y los demás datos son válidos', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: nombreValido,
					email: correoValido,
					pass: passwordInvalida,
					gdpr: true
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Habilitado si los datos son válidos', () => {
		const component = shallowMount(SignupForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: nombreValido,
					email: correoValido,
					pass: passwordValida,
					gdpr: true
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeUndefined();
	});
});

describe('Función de registro', () => {
	let component;

	beforeEach(() => {
		notificaciones.warning.mockClear();
		notificaciones.success.mockClear();
		firebase.auth.createUserWithEmailAndPassword.mockClear();
		component = shallowMount(SignupForm, {
			stubs: ['router-link']
		});
	});

	it('Reset limpia los datos', () => {
		component.vm.reset();
		expect(component.vm.$data.name).toBe('');
		expect(component.vm.$data.email).toBe('');
		expect(component.vm.$data.pass).toBe('');
		expect(component.vm.$data.gdpr).toBe(false);
	});

	it('Se actualiza el nombre del usuario', async () => {
		firebase.auth.createUserWithEmailAndPassword.mockResolvedValue({
			user: {
				updateProfile: jest.fn().mockResolvedValue(),
				sendEmailVerification: jest.fn().mockResolvedValue()
			}
		});
		const signup = jest.spyOn(component.vm, 'signup');
		const reset = jest.spyOn(component.vm, 'reset');
		signup();
		await component.vm.$nextTick();
		await component.vm.$nextTick();
		expect(firebase.auth.createUserWithEmailAndPassword).toHaveBeenCalled();
		expect(firebase.db.collection).toHaveBeenCalledWith('users');
		expect(notificaciones.success).toHaveBeenCalled();
		expect(reset).toHaveBeenCalled();
	});

	it('No procede si el correo es inválido', async () => {
		firebase.auth.createUserWithEmailAndPassword.mockRejectedValue(
			'auth/invalid-email'
		);
		const signup = jest.spyOn(component.vm, 'signup');
		try {
			signup();
			await component.vm.$nextTick();
			await component.vm.$nextTick();
		} catch (e) {
			expect(notificaciones.warning).toHaveBeenCalled();
			expect(e).toMatch('auth/invalid-email');
		}
	});
});
