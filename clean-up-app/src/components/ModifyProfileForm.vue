<template>
	<div>
		<h2 class="title is-4">Cambia tu nombre de usuario</h2>
		<b-field label="Name">
			<b-input v-model="name" palceholder="Nombre de usuario"></b-input>
		</b-field>
		<b-button type="is-primary" @click="saveName" :disabled="invalidName"
			>Cambiar nombre</b-button
		>
	</div>
</template>

<script>
	import { auth } from '@/firebase';
	import { success } from '@/helpers/notificaciones';
	export default {
		data: () => ({
			name: ''
		}),
		computed: {
			invalidName() {
				return this.name.length < 3;
			}
		},
		methods: {
			saveName() {
				auth.currentUser
					.updateProfile({
						displayName: this.name
					})
					.then(
						success(
							'Tu nombre se ha cambiado, recarga para ver los cambios'
						)
					);
			}
		}
	};
</script>
