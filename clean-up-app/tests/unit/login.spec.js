import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
import firebase from '@/firebase';

jest.mock('../../src/firebase.js', () => {
	return {
		auth: {
			singout: jest.fn()
		}
	};
});

describe('Estado del botón de inicio de sesión', () => {
	const correoInvalido = 'abc',
		correoValido = 'correoValido@gmail.com',
		passwordInvalida = 'abc',
		passwordValida = 'passwordValida';

	it('Deshabilitado si no hay datos', () => {
		const component = shallowMount(LoginForm);
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si los datos son inválidos', () => {
		const component = shallowMount(LoginForm, {
			data() {
				return {
					email: correoInvalido,
					pass: passwordInvalida
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si el correo es invalido', () => {
		const component = shallowMount(LoginForm, {
			data() {
				return {
					email: correoInvalido,
					pass: passwordValida
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si la contraseña es inválida', () => {
		const component = shallowMount(LoginForm, {
			data() {
				return {
					email: correoValido,
					pass: passwordInvalida
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Habilitado si los datos son válidos', () => {
		const component = shallowMount(LoginForm, {
			data() {
				return {
					email: correoValido,
					pass: passwordValida
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeUndefined();
	});
});

describe('Función de inicio', () => {
	let component;
	beforeEach(() => {
		firebase.auth.singout.mockClear();
		component = shallowMount(LoginForm, {
			mocks: {
				auth: true,
				$router: {
					replace: jest.fn()
				},
				$store: {
					commit: jest.fn()
				}
			}
		});
	});
	it('Guarda el tipo agente si es agente', () => {
		const check = jest.spyOn(component.vm, 'check');
		check('agent', false);
		expect(check).toHaveBeenCalled();
		expect(component.vm.$store.commit).toHaveBeenCalledWith(
			'change',
			'agent'
		);
		expect(component.vm.$router.replace).toHaveBeenCalledWith({
			path: '/home'
		});
	});
	it('Guarda el tipo usuario si es usuario válido', () => {
		const check = jest.spyOn(component.vm, 'check');
		check('user', true);
		expect(check).toHaveBeenCalled();
		expect(component.vm.$store.commit).toHaveBeenCalledWith(
			'change',
			'user'
		);
		expect(component.vm.$router.replace).toHaveBeenCalledWith({
			path: '/home'
		});
	});
	it('No guarda el tipo usuario si es usuario inválido', () => {
		const check = jest.spyOn(component.vm, 'check');
		check('user', false);
		expect(check).toHaveBeenCalled();
		expect(component.vm.$store.commit).not.toHaveBeenCalledWith(
			'change',
			'user'
		);
		expect(component.vm.$router.replace).not.toHaveBeenCalledWith({
			path: '/home'
		});
		expect(firebase.auth.singout).toHaveBeenCalled();
	});
});
