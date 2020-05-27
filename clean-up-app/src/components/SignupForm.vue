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
	import { auth, db } from '@/firebase';
	import authErrors from '@/helpers/authErrors';
	import { warning } from '@/helpers/notificaciones.js';

	export default {
		data: () => ({
			name: '',
			email: '',
			pass: ''
		}),
		computed: {
			validate: function() {
				return this.pass.length < 6 || this.name.length < 1 || this.email.length < 10;
			}
		},
		methods: {
			signup() {
				auth.createUserWithEmailAndPassword(this.email, this.pass)
					.catch(function(error) {
						warning(authErrors(error));
					})
					.then(() => {
						this.addDisplayName();
						this.registerUserType();
						this.$router.push({ path: '/mistickets' });
						this.verifyUser();

					});
			},
			addDisplayName() {
				let user = auth.currentUser;
				user.updateProfile({
					displayName: this.name
				}).catch(function(error) {
					warning(authErrors(error));
				});
			},
			registerUserType() {
				db.collection('users')
					.doc(auth.currentUser.uid)
					.set({
						type: 'user'
					});
			},
			verifyUser() {
				let user = auth.currentUser;
				auth.useDeviceLanguage();
    			user.sendEmailVerification().then(function() {
					warning('Email de verificación enviado')
				}).catch(function(error) {
					console.log(error)
				});
			}

			
		}
	};
</script>
