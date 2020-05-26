<template>
	<div>
		<div class="buttons">
			<b-button type="is-primary">Asignar</b-button>
			<b-button type="is-danger">Cerrar</b-button>
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
		>
			<template slot-scope="props">
				<b-table-column field="title" label="Título" sortable centered>
					<PopUpTicketAgente :ticket="props.row" />
				</b-table-column>

				<b-table-column field="date" label="Fecha" sortable centered>
					<span class="tag is-success">
						{{ new Date(props.row.date).toLocaleDateString() }}
					</span>
				</b-table-column>
			</template>
		</b-table>
	</div>
</template>

<script>
	import { db } from '@/firebase';
	import PopUpTicketAgente from '@/components/PopUpTicketAgente';

	export default {
		data: () => ({
			tickets: [],
			selection: []
		}),
		components: {
			PopUpTicketAgente
		},
		firestore() {
			db.collection('tickets').onSnapshot(snapshot => {
				console.log(
					'This came from:',
					snapshot.metadata.fromCache ? 'cache' : 'database'
				);
				snapshot.forEach(ticket => {
					let id = ticket.id;
					this.tickets.push({ id, ...ticket.data() });
				});
			});
		}
	};
</script>
