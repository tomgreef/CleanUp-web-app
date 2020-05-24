<template>
	<section>
		<div v-for="comentario in comentarios" v-bind:key="comentario">
			{{ comentario }}
		</div>
        <Comment/>
	</section>
</template>

<script>
	import Comment from '@/components/Comment';
	export default {
		data: () => ({
			comentarios: [
				'Un equipo de reparadores ha sido enviado a la ubicación',
				'El equipo de reparadores han arreglado el semáforo',
				'Se procede a cerrar la incidencia'
			]
		}),
		components: {
			Comment
		}
	};
</script>
