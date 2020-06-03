import { shallowMount } from '@vue/test-utils';
import CreateTicket from '@/components/CreateTicket.vue';

describe('Botón CrearTicket', () => {
	const WrongImagesNumber = ['0', '1', '2', '3'],
		RightImagesNumber = ['0', '1'];

	it('Deshabilitado si no hay datos', () => {
		const wrapper = shallowMount(CreateTicket);
		expect(
			wrapper.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si los datos son inválidos', () => {
		const wrapper = shallowMount(CreateTicket, {
			computed: {
				invalid() {
					return true;
				}
			}
		});
		expect(
			wrapper.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si hay demasiadas imágenes', () => {
		const wrapper = shallowMount(CreateTicket, {
			data() {
				return {
					images: WrongImagesNumber
				};
			},
			computed: {
				invalidSize() {
					return false;
				}
			}
		});
		expect(
			wrapper.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Deshabilitado si las imágenes son demasiado grandes', () => {
		const wrapper = shallowMount(CreateTicket, {
			data() {
				return {
					images: RightImagesNumber
				};
			},
			computed: {
				invalid() {
					return false;
				},
				invalidSize() {
					return true;
				}
			}
		});
		expect(
			wrapper.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});

	it('Habilitado si los datos son correctos', () => {
		const wrapper = shallowMount(CreateTicket, {
			computed: {
				invalidSize() {
					return false;
				},
				invalid() {
					return false;
				}
			}
		});
		expect(wrapper.get('b-button-stub').attributes('disabled')).toBeFalsy();
	});
});
