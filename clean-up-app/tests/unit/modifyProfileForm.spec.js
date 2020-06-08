import { shallowMount } from '@vue/test-utils';
import ModifyProfileForm from '@/components/ModifyProfileForm.vue';

describe('Botón Cambiar nombre', () => {
	it('Deshabilitado si el nombre es inválido', () => {
		const component = shallowMount(ModifyProfileForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: 'ab'
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Habilitado si el nombre es válido', () => {
		const component = shallowMount(ModifyProfileForm, {
			stubs: ['router-link'],
			data() {
				return {
					name: 'Bob'
				};
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeUndefined();
	});
});
