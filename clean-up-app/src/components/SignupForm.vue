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
		<div class="field">
			<b-checkbox v-model="gdpr">
				Al seleccionar esta casilla reconoce que ha leído y acepta las
				<router-link to="/GDPR" target="_blank"
					>condiciones de uso y la política de protección de datos
					personales</router-link
				>
				de Clean-Up
			</b-checkbox>
		</div>
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
	import { warning, success } from '@/helpers/notificaciones.js';

	export default {
		data: () => ({
			name: '',
			email: '',
			pass: '',
			gdpr: false
		}),
		computed: {
			validate: function() {
				return (
					this.pass.length < 6 ||
					this.name.length < 3 ||
					this.email.length < 8 ||
					this.gdpr == false
				);
			}
		},
		methods: {
			signup() {
				auth.createUserWithEmailAndPassword(this.email, this.pass)
					.then(userRef => {
						userRef.user
							.updateProfile({
								displayName: this.name
							})
							.then(() => {
								db.collection('users')
									.doc(userRef.user.uid)
									.set({
										type: 'user'
									});
							})
							.then(() => {
								userRef.user
									.sendEmailVerification()
									.then(function() {
										success(
											'Email de verificación enviado, comprueba tu correo'
										);
									});
							})
							.then(() => {
								this.name = '';
								this.email = '';
								this.password = '';
								this.gdpr = false;
							});
					})
					.catch(function(error) {
						console.log(error);

						warning(authErrors(error));
					});
			}
		}
	};
</script>
