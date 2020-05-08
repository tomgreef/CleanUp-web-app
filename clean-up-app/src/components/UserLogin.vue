<template>
	<div class="box">
		<h1 class="title is-4">Inicio de sesión</h1>
		<b-field label="Email" label-position="on-border">
			<b-input v-model="email"></b-input>
		</b-field>
		<b-field label="Contraseña" label-position="on-border">
			<b-input v-model="pass"></b-input>
		</b-field>
		<b-button @click="inicio" class="button" type="is-primary" expanded
			>Iniciar sesión</b-button
		>
	</div>
</template>

<script>
	import firebase from 'firebase';
	export default {
		data: () => ({
			email: '',
			pass: ''
		}),
		methods: {
			verify: () => {
				if (this.email.includes('@')) {
					console.log(this.email);
				}
			},
			inicio: () => {
				const auth = firebase.auth();
				console.log(this.email);
				auth.signinWithEmailAndPassword(this.email, this.pass).catch(
					error => {
						console.log(error);
					}
				);
			}
		}
	};
</script>
