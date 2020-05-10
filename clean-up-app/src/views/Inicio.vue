<template>
	<section class="section">
		<div class="container">
			<!--
			<div class="columns">
				<div class="column">
					<UserLogin />
				</div>
				<div class="column">
					<UserSignup />
				</div>
			</div>
			-->
			<div class="columns is-centered">
				<div class="column is-half">
					<b-tabs position="is-centered" type="is-toggle" expanded>
						<b-tab-item label="Iniciar sesión">
							<UserLogin />
						</b-tab-item>
						<b-tab-item label="Crear cuenta">
							<UserSignup />
						</b-tab-item>
					</b-tabs>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import UserLogin from '@/components/UserLogin';
	import UserSignup from '@/components/UserSignUp';

	export default {
		components: {
			UserLogin,
			UserSignup
		}
	};
</script>
