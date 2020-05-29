<template>
	<b-navbar type="is-primary" :spaced="true">
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<h1 class="title">Clean Up</h1>
			</b-navbar-item>
		</template>
		<template slot="start" v-if="isLoggedIn">
			<b-navbar-item :href="isUser ? '/mistickets' : 'inicioagente'">
				Inicio
			</b-navbar-item>
			<b-navbar-item v-if="isUser" href="/crearticket">
				Crear incidencia
			</b-navbar-item>
		</template>
		<template slot="end" v-if="isLoggedIn">
			<b-navbar-item tag="div">
				<div class="buttons">
					<b-button
						tag="router-link"
						to="/perfil"
						inverted
						type="is-link"
						>Mi perfil</b-button
					>
					<b-button type="is-danger" @click="logout"
						>Cerrar sesión</b-button
					>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
	import { auth } from '@/firebase';

	export default {
		computed: {
			isUser() {
				return this.$store.getters.type == 'user';
			},
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
