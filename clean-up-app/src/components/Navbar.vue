<template>
	<b-navbar type="is-primary" :spaced="true">
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<h1 class="title">Clean Up</h1>
			</b-navbar-item>
		</template>
		<template slot="start" v-if="showUser">
			<b-navbar-item href="/">
				Inicio
			</b-navbar-item>
			<b-navbar-item href="CrearTicket">
				Crear incidencia
			</b-navbar-item>
		</template>
		<template slot="end" v-if="showUser">
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
	import { auth } from 'firebase';
	import { getUserType } from '@/helpers/sessionHelper';

	export default {
		computed: {
			showUser() {
				let log = auth().currentUser != null;
				let type = getUserType();
				return log && type;
			}
		},
		methods: {
			logout() {
				auth()
					.signOut()
					.then(() => {
						this.$router.replace({ name: 'Inicio' });
					});
			}
		}
	};
</script>
