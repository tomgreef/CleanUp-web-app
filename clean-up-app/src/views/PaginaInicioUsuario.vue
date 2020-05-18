<template>
	<section class="section container">
        <ListadoTickets/>    
	</section>
</template>

<script>
    import ListadoTickets from '@/components/ListadoTickets';
    export default {
        data() {
            return {
                tickets: []
            }
        },
		components: {
            ListadoTickets
		}
	};
</script>
