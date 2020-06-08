<template>
	<section>
		<b-field label="Añadir un comentario" label-position="on-border">
			<b-input
				v-model="message"
				placeholder="Escriba un comentario"
				type="textarea"
				maxlength="200"
			></b-input>
		</b-field>
		<b-button type="is-primary" expanded @click="addComment"
			>Añadir</b-button
		>
	</section>
</template>

<script>
	import { auth, db } from '@/firebase';
	import { success } from '@/helpers/notificaciones';

	export default {
		data: () => ({
			message: ''
		}),
		props: {
			ticketId: String
		},
		methods: {
			addComment() {
				let agentId = auth.currentUser.uid;
				db.collection('tickets')
					.doc(this.ticketId)
					.collection('comments')
					.add({
						agent: auth.currentUser.displayName || agentId,
						message: this.message,
						date: Date.now()
					})
					.then(() => {
						success('Comentario añadido satisfactoriamente');
						this.message = '';
					});
			}
		}
	};
</script>
