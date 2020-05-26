<template>
	<div>
		<div class="buttons">
			<p class="control">
				<b-button type="is-primary">Asignar</b-button>
				<b-button type="is-danger">Cerrar</b-button>
				<b-switch
					v-model="filter"
					:rounded="false"
					size="is-medium"
					type="is-primary"
					>{{
						filter ? 'Asignadas a mi' : 'Todas las incidencias'
					}}</b-switch
				>
			</p>
		</div>
		<b-table
			:data="tickets"
			paginated
			per-page="10"
			checkable
			:checked-rows.sync="selection"
			aria-next-label="Página siguiente"
			aria-previous-label="Página anterior"
			aria-page-label="Página"
			aria-current-label="Página actual"
			hoverable
		>
			<template slot-scope="props">
				<b-table-column
					field="title"
					label="Título"
					sortable
					searchable
				>
					<PopUpTicketAgente :ticket="props.row" />
				</b-table-column>

				<b-table-column
					field="agentUid"
					label="Agente asignado"
					sortable
				>
					{{
						props.row.agentUid != ''
							? props.row.agentUid
							: 'Sin asignar'
					}}
				</b-table-column>
				<b-table-column field="date" label="Fecha" sortable centered>
					<span class="tag is-success">
						{{ new Date(props.row.date).toLocaleDateString() }}
					</span>
				</b-table-column>
			</template>
			<template slot="empty">
				<section class="section">
					<div class="content has-text-grey has-text-centered">
						<p>
							<b-icon icon="emoticon-sad" size="is-large">
							</b-icon>
						</p>
						<p>No hay incidencias</p>
					</div>
				</section>
			</template>
		</b-table>
	</div>
</template>

<script>
	import { db } from '@/firebase';
	import PopUpTicketAgente from '@/components/PopUpTicketAgente';

	export default {
		data: () => ({
			selection: [],
			filter: false
		}),
		components: {
			PopUpTicketAgente
		},
		firestore() {
			return {
				tickets: db.collection('tickets').orderBy('date', 'desc')
			};
			/*
			.onSnapshot(snapshot => {
				console.log(
					'This came from:',
					snapshot.metadata.fromCache ? 'cache' : 'database'
				);
				snapshot.forEach(ticket => {
					let id = ticket.id;
					this.tickets.push({ id, ...ticket.data() });
				});
			});
			*/
		}
	};
</script>
