<template>
	<div class="box">
		<h1 class="title is-4">Crear cuenta</h1>
		<b-field label="Nombre" label-position="on-border">
			<b-input v-model="name"></b-input>
		</b-field>
		<b-field label="Email" label-position="on-border">
			<b-input v-model="email"></b-input>
		</b-field>
		<b-field label="Contraseña" label-position="on-border">
			<b-input v-model="pass" type="password" password-reveal></b-input>
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
	import { warning } from '@/helpers/notificaciones.js';

	export default {
		data: () => ({
			name: '',
			email: '',
			pass: ''
		}),
		props: {
			userType: String,
			redirect: String
		},
		computed: {
			validate: function() {
				return this.pass.length < 6;
			}
		},
		methods: {
			signup() {
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.email, this.pass)
					.catch(function(error) {
						warning(authErrors(error));
					})
					.then(() => {
						this.addDisplayName();
						this.registerUserType();
						this.$router.replace({ name: this.redirect });
					});
			},
			addDisplayName() {
				let user = firebase.auth().currentUser;
				user.updateProfile({
					displayName: this.name
				}).catch(function(error) {
					warning(authErrors(error));
				});
			},
			registerUserType() {
				firebase
					.firestore()
					.collection('users')
					.add({
						uid: firebase.auth().currentUser.uid,
						type: this.userType
					});
			}
		}
	};
</script>
