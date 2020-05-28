<template>
	<section class="section">
		<div class="container">
			<TicketList :isAgent="true" />
		</div>
	</section>
</template>

<script>
	import TicketList from '@/components/TicketList';

	export default {
		data: () => ({}),
		components: {
			TicketList
		}
	};
</script>
