<template>
	<section class="section">
        <AgentTicketList/> 
		<PopUpTicketAgente/>
	</section>
</template>

<script>
	import AgentTicketList from '@/components/AgentTicketList';
	import PopUpTicketAgente from '@/components/PopUpTicketAgente';
	export default {
		data: () => ({
			
		}),
		components: {
			AgentTicketList,
			PopUpTicketAgente
		}
	};
</script>
