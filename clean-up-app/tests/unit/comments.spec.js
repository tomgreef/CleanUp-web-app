import { shallowMount } from '@vue/test-utils';
import Comment from '@/components/Comment';
import CommentList from '@/components/CommentList';
import CreateComment from '@/components/CreateComment';
import firebase from '@/firebase';
import notificaciones from '@/helpers/notificaciones';

jest.mock('../../src/firebase.js', () => ({
	auth: { currentUser: { displayName: 'Agente 007', uid: 'uid' } }
}));

jest.mock('../../src/helpers/notificaciones.js', () => ({
	success: jest.fn()
}));

describe('Componente Comment', () => {
	it('Muestra los datos del comentario', () => {
		const date = new Date().toLocaleString();
		const comment = {
			agent: 'agent name',
			date: date,
			message: 'comment message'
		};
		const component = shallowMount(Comment, {
			propsData: {
				comment: comment
			}
		});
		const componentText = component.text();
		expect(componentText.includes(comment.agent)).toBe(true);
		expect(componentText.includes(comment.date)).toBe(true);
		expect(componentText.includes(comment.message)).toBe(true);
	});
});

describe('Componente CommentList', () => {
	it('Si no hay comentarios, muestra un mensaje', () => {
		const component = shallowMount(CommentList);
		expect(component.text()).toMatch(
			'Aún no hay comentarios en esta incidencia'
		);
	});

	it('Si hay comentarios, muestra un listado', () => {
		const comments = [{ id: 'cm1' }, { id: 'cm2' }, { id: 'cm3' }];
		const component = shallowMount(CommentList, {
			data() {
				return {
					comments: comments
				};
			}
		});
		expect(component.text()).toMatch('Listado de comentarios');
	});
});

describe('Componente CreateComment', () => {
	it('El comentario se guarda', async () => {
		const add = jest.fn().mockResolvedValue();
		const subcollection = jest.fn().mockReturnValue({ add: add });
		const doc = jest.fn().mockReturnValue({ collection: subcollection });
		firebase.db = {
			collection: jest.fn(() => {
				return {
					doc: doc
				};
			})
		};
		const component = shallowMount(CreateComment, {
			propsData: {
				ticketId: 'ticketId'
			},
			data() {
				return {
					message: 'message'
				};
			}
		});
		const addComment = jest.spyOn(component.vm, 'addComment');
		addComment();
		await component.vm.$nextTick();
		expect(firebase.db.collection).toHaveBeenCalledWith('tickets');
		expect(doc).toHaveBeenCalledWith('ticketId');
		expect(subcollection).toHaveBeenCalledWith('comments');
		expect(add).toHaveBeenCalledWith({
			agent: 'Agente 007',
			message: 'message',
			date: expect.any(Number)
		});
		expect(notificaciones.success).toHaveBeenCalledWith(
			'Comentario añadido satisfactoriamente'
		);
	});
});
