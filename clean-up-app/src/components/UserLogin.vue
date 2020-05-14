<template>
	<div class="box">
		<h1 class="title is-4">Inicio de sesión</h1>
		<b-field label="Email" label-position="on-border">
			<b-input v-model="email"></b-input>
		</b-field>
		<b-field label="Contraseña" label-position="on-border">
			<b-input v-model="pass" type="password"></b-input>
		</b-field>
		<b-button @click="inicio" class="button" type="is-primary" expanded :disabled="valid"
			>Iniciar sesión</b-button
		>
	</div>
</template>

<script>
	import firebase from 'firebase';
	import authErrors from '@/helpers/authErrors'

	export default {
		data: function() {
			return {
				email: '',
				pass: ''
			};
		},
		computed: {
			valid: function() {
				return this.pass.length < 6 || this.email.length < 10
			}
		},
		methods: {
			inicio: function() {
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.pass)
					.catch(error => {
						this.warning(authErrors(error))
					})
			},
            warning(msg) {
                this.$buefy.snackbar.open({
					duration: 5000,
                    message: msg,
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'Retry',
                    indefinite: true,
                })
            }
		}
	};
</script>
