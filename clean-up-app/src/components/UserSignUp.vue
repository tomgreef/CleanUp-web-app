<template>
	<div class="box">
		<h1 class="title is-4">Crear cuenta</h1>
		<b-field label="Nombre" label-position="on-border">
			<b-input v-model="name"></b-input>
		</b-field>
		<b-field label="Telefono" label-position="on-border">
			<b-input v-model="tel"></b-input>
		</b-field>
		<b-field label="Email" label-position="on-border">
			<b-input v-model="email"></b-input>
		</b-field>
		<b-field label="Contraseña" label-position="on-border">
			<b-input v-model="pass" type="password"></b-input>
		</b-field>
		<b-button
			class="button"
			type="is-primary"
			expanded
			@click="signup"
			:disabled="validate"
			>Crear cuenta</b-button
		>
	</div>
</template>

<script>
	import firebase from 'firebase';
	import authErrors from '@/helpers/authErrors';
	export default {
		data: () => ({
			name: '',
			tel: '',
			email: '',
			pass: ''
		}),
		computed: {
			validate: function() {
				let valid = this.pass.length < 4;
				console.log(valid);
				return valid;
			}
		},
		methods: {
			signup: function() {
				const auth = firebase.auth();
				auth.createUserWithEmailAndPassword(this.email, this.pass)
					.catch(function(error) {
						authErrors(error);
					})
					.then(function() {
						let user = auth.currentUser;
						user.updateProfile({
							displayName: this.name,
							telephone: this.tel
						}).catch(function(error) {
							authErrors(error);
						});
					});
			}
		}
	};
</script>
