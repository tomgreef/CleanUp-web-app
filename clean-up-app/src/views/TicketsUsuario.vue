<template>
	<section class="section">
		<div class="container">
			<Ticket
				v-for="ticket in tickets"
				:key="ticket.id"
				:id="ticket.id"
				:title="ticket.title"
				:description="ticket.description"
			/>
		</div>
	</section>
</template>

<script>
	import Ticket from '@/components/Ticket';
	export default {
		data: () => ({
			tickets: [
				{ id: 'asdwaqr23', title: 'Autobus', description: 'Bus roto' },
				{
					id: 'crhchrct',
					title: 'Farola',
					description: 'Farola caida'
				},
				{
					id: 'fghntjthjy',
					title: 'Contenedor',
					description: 'Contenedor volcado'
				},
				{
					id: 'igeomhuxrgi',
					title: 'Muro',
					description: 'Muro agrietado'
				}
			]
		}),
		components: {
			Ticket
		}
	};
</script>
