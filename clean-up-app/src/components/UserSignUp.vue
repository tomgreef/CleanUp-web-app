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
			<b-input v-model="pass"></b-input>
		</b-field>
		<b-button class="button" type="is-primary" expanded @click="signup"
			>Crear cuenta</b-button
		>
	</div>
</template>

<script>
import firebase from "firebase"
	export default {
		data:() => ({
			name: null,
			tel: null,
			email: null,
			pass: null
		}),
		methods:{
			signup: function(){
				const auth = firebase.auth
				auth().createUserWithEmailAndPassword(this.email, this.pass).then((u, err) =>{
					if(err){
						console.log(err);
						
					}else{
						console.table(u)
						u.updateProfile({telephone:this.tel})
					}
				})
			}
		}
	};
</script>
