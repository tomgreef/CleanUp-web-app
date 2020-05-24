<template>
	<section class="section">
		<div class="container">
			<AgentTicketList/>
            <PopUpTicketAgente/>
		</div>
	</section>
</template>

<script>
	import AgentTicketList from '@/components/AgentTicketList';
	import PopUpTicketAgente from '@/components/PopUpTicketAgente';
	export default {
		data: () => ({}),
		components: {
			AgentTicketList,
			PopUpTicketAgente
		}
	};
</script>
