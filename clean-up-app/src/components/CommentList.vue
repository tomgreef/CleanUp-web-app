<template>
	<div>
		<b-collapse class="is-primary" animation="slide" :open.sync="isOpen">
			<p class="panel-heading" slot="trigger">
				<strong>
					Listado de comentarios
				</strong>
				<b-icon :icon="isOpen ? 'menu-down' : 'menu-up'"> </b-icon>
			</p>
			<p
				v-for="comentario in comentarios"
				:key="comentario.id"
				class="panel-block"
			>
				<Comment :comment="comentario" />
			</p>
		</b-collapse>
	</div>
</template>

<script>
	import Comment from '@/components/Comment';
	export default {
		data: () => ({
			isOpen: true,
			comentarios: [
				{
					id: 0,
					agentId: 'agent0',
					date: Date.now() - 24 * 60 * 60 * 1000 * 2,
					message:
						'Un equipo de reparadores ha sido enviado a la ubicación'
				},
				{
					id: 1,
					agentId: 'agent1',
					date: Date.now() - 24 * 60 * 60 * 1000,
					message:
						'El equipo de reparadores han arreglado el semáforo'
				},
				{
					id: 2,
					agentId: 'agent007',
					date: Date.now(),
					message: 'Se procede a cerrar la incidencia'
				}
			]
		}),
		components: {
			Comment
		}
	};
</script>
