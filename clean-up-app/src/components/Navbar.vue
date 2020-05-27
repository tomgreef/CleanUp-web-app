<template>
	<b-navbar type="is-primary" :spaced="true">
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<h1 class="title">Clean Up</h1>
			</b-navbar-item>
		</template>
		<template slot="start" v-if="isLoggedIn">
			<b-navbar-item href="/">
				Inicio
			</b-navbar-item>
			<b-navbar-item v-if="isUser" href="CrearTicket">
				Crear incidencia
			</b-navbar-item>
		</template>
		<template slot="end">
			<b-navbar-item tag="div">
				<div class="buttons" v-if="isLoggedIn">
					<b-button
						v-if="isUser"
						tag="router-link"
						to="/perfil"
						inverted
						type="is-link"
						>Mi perfil</b-button
					>
					<b-button v-if="isLoggedIn" type="is-danger" @click="logout"
						>Cerrar sesión</b-button
					>
					<b-button
						v-if="!isLoggedIn"
						tag="router-link"
						:to="inUserLanding ? '/agentlanding' : '/'"
						inverted
						type="is-link"
						>{{
							inUserLanding ? 'Soy un agente' : 'Soy un usuario'
						}}</b-button
					>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
	import { auth } from '@/firebase';
	import { getUserType } from '@/helpers/sessionHelper';

	export default {
		data: () => ({
			isUser: false
		}),
		mounted() {
			if (this.isLoggedIn) {
				getUserType().then(type => {
					this.isUser = type == 'user';
				});
			}
		},
		computed: {
			inUserLanding() {
				return this.$route.path == '/';
			},
			isLoggedIn() {
				return auth.currentUser != null;
			}
		},
		methods: {
			logout() {
				auth.signOut().then(() => {
					this.$router.push({ path: '/' });
				});
			}
		}
	};
</script>
