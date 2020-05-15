<template>
	<section class="section">
		<div class="container">
			<Ticket>
			</Ticket>	
		</div>
			<CrearTicket></CrearTicket>
	</section>
</template>

<script>
	import Ticket from '@/components/Ticket';
	import CrearTicket from '@/components/CrearTicket';
    export default {
		components: {
			Ticket,
			CrearTicket
		}
	};
</script>
