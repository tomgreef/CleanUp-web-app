import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
import firebase from '@/firebase';
import getUserType from '@/helpers/sessionHelper';

jest.mock('../../src/helpers/sessionHelper.js', () => jest.fn());

jest.mock('../../src/firebase.js', () => ({
	auth: {
		signInWithEmailAndPassword: jest.fn(),
		singout: jest.fn()
	}
}));

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
	let component, type, emailVerified;
	const $router = {
			replace: jest.fn()
		},
		$store = {
			commit: jest.fn()
		};

	beforeEach(() => {
		$router.replace.mockClear();
		$store.commit.mockClear();
		getUserType.mockClear();
		firebase.auth.singout.mockClear();
		component = shallowMount(LoginForm, {
			mocks: {
				$router,
				$store
			}
		});
	});

	function setMocks(t, eV) {
		type = t;
		emailVerified = eV;
		getUserType.mockResolvedValue(type);
		firebase.auth.signInWithEmailAndPassword.mockResolvedValue({
			user: {
				emailVerified: emailVerified
			}
		});
	}

	it('Procede si es agente', async () => {
		setMocks('agent', false);
		const inicio = jest.spyOn(component.vm, 'inicio');
		inicio();
		await component.vm.$nextTick();
		expect($router.replace).toHaveBeenCalledWith({ path: '/home' });
		expect($store.commit).toHaveBeenCalledWith('change', type);
	});

	it('Procede si es usuario con correo válido', async () => {
		setMocks('user', true);
		const inicio = jest.spyOn(component.vm, 'inicio');
		inicio();
		await component.vm.$nextTick();
		expect($router.replace).toHaveBeenCalledWith({ path: '/home' });
		expect($store.commit).toHaveBeenCalledWith('change', type);
	});

	it('No procede si es usuario con correo inválido', async () => {
		setMocks('user', false);
		const inicio = jest.spyOn(component.vm, 'inicio');
		inicio();
		await component.vm.$nextTick();
		expect(firebase.auth.singout).toHaveBeenCalled();
	});
});
