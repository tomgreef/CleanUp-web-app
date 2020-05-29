<template>
	<section class="section">
		<div class="container">
			<TicketsTable :isAgent="false" />
		</div>
	</section>
</template>

<script>
	import TicketsTable from '@/components/TicketsTable';
	export default {
		components: {
			TicketsTable
		}
	};
</script>
