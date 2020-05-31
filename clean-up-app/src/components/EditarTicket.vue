<template>
	<div>
		<div>
			Titulo:
			<input
				type="text"
				ref="titulo"
				:value="ticket.title"
				:disabled="!editar"
				:class="{ view: !editar }"
			/>
		</div>
		<div>
			Descripcion:
			<input
				type="text"
				ref="descpricion"
				:value="ticket.descripcion"
				:disabled="!editar"
				:class="{ view: !editar }"
			/>
		</div>
		<div>
			Ubicacion:
			<input
				type="text"
				ref="ubicacion"
				:value="ticket.ubicacion"
				:disabled="!editar"
				:class="{ view: !editar }"
			/>
		</div>

		<button @click="editar = !editar" v-if="!editar">Editar</button>
		<button @click="guardar" v-else-if="editar">Guardar</button>

		<button v-if="editar" @click="editar = false">Cancelar</button>
	</div>
</template>

<script>
import Ticket from '@/components/Ticket';
export default {
	data: function() {
		return {
			editar: false,

			ticket: {
				title: '',
				descripcion: '',
				ubicacion: ''
			}
		};
	},

	methods: {
		save() {
			this.ticket.title = this.$refs['title'].value;
			this.ticket.descripcion = this.$refs['descripcion'].value;
			this.ticket.ubicacion = this.$refs['ubicacion'].value;
			this.editar = !editar;
		}
	}
};
</script>

<style>
.view {
	border-color: transparent;
	background-color: initial;
	color: initial;
}
</style>
