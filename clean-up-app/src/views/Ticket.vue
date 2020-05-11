<template>
	<section class="section">
		<div class="container">
			<Ticket>
			</Ticket>
			<BotonAgregarTicket>
			</BotonAgregarTicket>
			<BotonPerfil>
			</BotonPerfil>
		</div>
	</section>
</template>

<script>
	import Ticket from '@/components/Ticket';
	import BotonAgregarTicket from '@/components/BotonAgregarTicket';
	import BotonPerfil from '@/components/BotonPerfil';
    export default {
		components: {
			Ticket,
			BotonAgregarTicket,
			BotonPerfil
		}
	};
</script>
