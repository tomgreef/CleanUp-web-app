import { shallowMount } from '@vue/test-utils';
import PopUpEditTicket from '@/components/PopUpEditTicket';
import firebase from '@/firebase';
import notificaciones from '@/helpers/notificaciones';

jest.mock('../../src/firebase.js', () => ({}));

jest.mock('../../src/helpers/notificaciones.js', () => ({
	success: jest.fn()
}));

describe('Botón de editar ticket', () => {
	it('Deshabilitado si el ticket está cerrado ', () => {
		const component = shallowMount(PopUpEditTicket, {
			computed: {
				currentUserUid() {
					return;
				}
			},
			propsData: {
				ticket: {
					closed: true
				}
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
	});
	it('Habilitado si el ticket está abierto ', () => {
		const component = shallowMount(PopUpEditTicket, {
			computed: {
				currentUserUid() {
					return;
				}
			},
			propsData: {
				ticket: {
					title: 'Titulo del ticket',
					description: 'Descripción del ticket',
					closed: false
				}
			}
		});
		expect(
			component.get('b-button-stub').attributes('disabled')
		).toBeFalsy();
	});
});

describe('Función de guardar cambios', () => {
	it('Guarda los cambios', async () => {
		const update = jest.fn().mockResolvedValue();
		const doc = jest.fn().mockReturnValue({ update: update });
		firebase.db = {
			collection: jest.fn(() => {
				return {
					doc: doc
				};
			})
		};
		const ticket = {
			id: 'ticketId',
			title: 'Titulo válido',
			description: 'Descripción de la incidencia',
			cp: 29007,
			streetNumber: 23,
			street: 'Calle Unitaria'
		};
		const component = shallowMount(PopUpEditTicket, {
			computed: {
				currentUserUid() {
					return;
				}
			},
			propsData: {
				ticket: ticket
			},
			data() {
				return {
					isEditTicketModalActive: true
				};
			}
		});
		const saveChanges = jest.spyOn(component.vm, 'saveChanges');
		saveChanges();
		await component.vm.$nextTick();
		expect(firebase.db.collection).toHaveBeenCalledWith('tickets');
		expect(doc).toHaveBeenCalledWith(ticket.id);
		expect(update).toHaveBeenCalledWith({
			title: ticket.title,
			description: ticket.description,
			streetNumber: ticket.streetNumber
		});
		expect(notificaciones.success).toHaveBeenCalledWith(
			'Incidencia modificada con éxito. Recarga para ver los cambios'
		);
		expect(component.vm.isEditTicketModalActive).toBe(false);
	});
});
