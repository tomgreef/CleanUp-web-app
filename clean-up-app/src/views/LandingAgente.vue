<template>
	<section class="section">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-half">
					<b-tabs position="is-centered" type="is-toggle" expanded>
						<b-tab-item label="Iniciar sesión">
							<UserLogin redirect="InicioAgente" />
						</b-tab-item>
					</b-tabs>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import UserLogin from '@/components/UserLogin';

	export default {
		components: {
			UserLogin,
		}
	};
</script>