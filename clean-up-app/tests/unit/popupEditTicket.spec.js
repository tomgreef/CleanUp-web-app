import { shallowMount } from '@vue/test-utils';
import PopUpEditTicket from '@/components/PopUpEditTicket';
import firebase from '@/firebase';
import notificaciones from '@/helpers/notificaciones';

jest.mock('../../src/firebase.js', () => ({
	auth: { currentUser: { uid: 'userUid' } }
}));

jest.mock('../../src/helpers/notificaciones.js', () => ({
	success: jest.fn()
}));

describe('Botón de editar ticket', () => {
	it('No se muestra si no eres el usuario creador', () => {
		const component = shallowMount(PopUpEditTicket, {
			propsData: {
				ticket: {
					userUid: 'idDeUsuario',
					closed: false
				}
			}
		});
		expect(component.text()).not.toContain(
			'Editar detalles de la incidencia'
		);
	});
	it('Deshabilitado si el ticket está cerrado ', () => {
		const component = shallowMount(PopUpEditTicket, {
			propsData: {
				ticket: {
					userUid: firebase.auth.currentUser.uid,
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
			propsData: {
				ticket: {
					userUid: firebase.auth.currentUser.uid,
					title: 'Titulo del ticket',
					description: 'Descripción del ticket',
					cp: 29007,
					streetNumber: 23,
					street: 'Calle Unitaria',
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
		const data = {
			title: 'Titulo válido',
			description: 'Descripción de la incidencia',
			cp: 29007,
			streetNumber: 23,
			street: 'Calle Unitaria',
			isEditTicketModalActive: true
		};
		const component = shallowMount(PopUpEditTicket, {
			propsData: {
				ticket: { id: 'ticketId' }
			},
			data() {
				return data;
			}
		});
		const saveChanges = jest.spyOn(component.vm, 'saveChanges');
		saveChanges();
		await component.vm.$nextTick();
		expect(firebase.db.collection).toHaveBeenCalledWith('tickets');
		expect(doc).toHaveBeenCalledWith('ticketId');
		expect(update).toHaveBeenCalledWith({
			title: data.title,
			description: data.description,
			streetNumber: data.streetNumber
		});
		expect(notificaciones.success).toHaveBeenCalledWith(
			'Incidencia modificada con éxito. Recarga para ver los cambios'
		);
		expect(data.isEditTicketModalActive).toBe(false);
	});
});
