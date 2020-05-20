<template>
	<section class="section container">
        <BarraNavegacion/>  
        <ListadoTickets/>  
	</section>
</template>

<script>
    import BarraNavegacion from '@/components/BarraNavegacion';
    import ListadoTickets from '@/components/ListadoTickets';

    export default {
        data() {
            return {
                tickets: []
            }
        },
		components: {
            BarraNavegacion,
            ListadoTickets
		}
	};
</script>
