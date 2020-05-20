<template>
	<b-navbar type="is-primary" :spaced="true">
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<h1 class="title">Clean Up</h1>
			</b-navbar-item>
		</template>
		<div v-if="loggedIn">
			<div v-if="isUser">
				<template slot="start">
					<b-navbar-item href="#">
						Inicio
					</b-navbar-item>
					<b-navbar-item href="#">
						Crear incidencia
					</b-navbar-item>
				</template>

				<template slot="end">
					<b-navbar-item tag="div">
						<div class="buttons">
							<b-button
								tag="router-link"
								to="/perfil"
								inverted
								type="is-link"
								>Mi perfil</b-button
							>
							<b-button type="is-danger">Cerrar sesión</b-button>
						</div>
					</b-navbar-item>
				</template>
			</div>
		</div>
	</b-navbar>
</template>

<script>
	import firebase from 'firebase';

	export default {
		computed: {
			loggedIn() {
				return firebase.auth().currentUser != null;
			},
			isUser() {
				return 1; // TODO: Mirar en cache o bbdd
			}
		}
	};
</script>
