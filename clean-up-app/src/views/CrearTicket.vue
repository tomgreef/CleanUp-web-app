<template>
	<section class="section">
		<div class="columns is-centered">
			<div class="column is-half">
				<h1 class="title">Crear una incidencia</h1>
				<CrearTicket />
			</div>
		</div>
	</section>
</template>

<script>
	import CrearTicket from '@/components/CrearTicket';

	export default {
		components: {
			CrearTicket
		}
	};
</script>
