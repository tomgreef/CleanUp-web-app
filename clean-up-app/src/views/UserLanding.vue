<template>
	<section class="section">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-half">
					<b-tabs position="is-centered" type="is-toggle" expanded>
						<b-tab-item label="Iniciar sesión">
							<LoginForm :redirect="redirect" />
						</b-tab-item>
						<b-tab-item label="Crear cuenta">
							<SignupForm userType="user" :redirect="redirect" />
						</b-tab-item>
					</b-tabs>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import LoginForm from '@/components/LoginForm';
	import SignupForm from '@/components/SignupForm';

	export default {
		data: () => ({
			redirect: '/mistickets'
		}),
		components: {
			LoginForm,
			SignupForm
		}
	};
</script>
