import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

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
