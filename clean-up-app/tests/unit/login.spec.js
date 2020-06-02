import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('Estado del botón de inicio de sesión', () => {
	const correoInvalido = 'abc',
		correoValido = 'correoValido@gmail.com',
		passwordInvalida = 'abc',
		passwordValida = 'passwordValida';

	it('Deshabilitado si no hay datos', () => {
		const component = shallowMount(LoginForm);
		expect(
			component.find('b-button-stub').attributes('disabled')
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
			component.find('b-button-stub').attributes('disabled')
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
			component.find('b-button-stub').attributes('disabled')
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
			component.find('b-button-stub').attributes('disabled')
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
			component.find('b-button-stub').attributes('disabled')
		).toBeFalsy();
	});
});
