<template>
	<section class="section">
		<div class="container">
			<TicketList :isAgent="false" />
		</div>
	</section>
</template>

<script>
	import TicketList from '@/components/TicketList';
	export default {
		components: {
			TicketList
		}
	};
</script>
