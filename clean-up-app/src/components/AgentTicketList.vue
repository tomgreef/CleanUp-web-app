<template>
	<section>
		<b-table
			:data="tickets"
			ref="table"
			paginated
			per-page="10"
			:opened-detailed="defaultOpenedDetails"
			detailed
			detail-key="id"
			@details-open="
				(row, index) =>
					$buefy.toast.open(`Expanded ${row.titulo}`)
			"
			:show-detail-icon='false'
			aria-next-label="Next page"
			aria-previous-label="Previous page"
			aria-page-label="Page"
			aria-current-label="Current page"
		>
			<template slot-scope="props">
				<b-table-column field="id" label="ID" width="40" numeric>
					{{ props.row.id }}
				</b-table-column>

                    
				<b-table-column field="titulo" label="Título" sortable>
					<template>
						<a @click="toggle(<PopUpTicketAgente/>)">
							{{ props.row.titulo }}
						</a>
					</template>
				</b-table-column>

				<b-table-column field="fecha" label="Fecha" sortable centered>
					<span class="tag is-success">
						{{ new Date(props.row.fecha).toLocaleDateString() }}
					</span>
				</b-table-column>
			</template>
		</b-table>
	</section>
</template>

<script>
	import PopUpTicketAgente from '@/components/PopUpTicketAgente';
	export default {
		data() {
			return {
				tickets: [
					{
						id: '12',
						titulo: 'Testeo bueno',
                        fecha: Date.now(),
                        descripcion: 'Pero esta roto hermano',
                        direccion: 'Calle' + ' ' + 'Numero' + ', ' + 'Codigo Postal'
					},
					{
						id: '10',
						titulo: 'Testeo malo',
                        fecha: Date.now(),
                        descripcion: 'estoy pobre surmano',
                        direccion: 'Calle' + ' ' + 'Numero' + ', ' + 'Codigo Postal'
					}
				],
				defaultOpenedDetails: [1],
				showDetailIcon: true
			};
		},
		methods: {
			toggle(row) {
				this.$refs.table.toggleDetails(row);
			}
		},
		components: {
			PopUpTicketAgente
		}
	};
</script>
