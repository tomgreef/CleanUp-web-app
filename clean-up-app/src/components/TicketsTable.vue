<template>
	<div>
		<b-field grouped group-multiline v-if="isAgent">
			<p class="control">
				<b-button
					type="is-primary"
					@click="asign"
					:disabled="selection.length == 0"
					>Asignar</b-button
				>
			</p>
			<p class="control">
				<b-tooltip
					type="is-dark"
					:active="selection.length > 1"
					always
					square
					multilined
					label="La primera incidencia que selecciones será la incidencia padre"
				>
					<b-button
						type="is-primary"
						@click="anidar"
						:disabled="selection.length <= 1"
						>Anidar</b-button
					>
				</b-tooltip>
			</p>
			<p class="control">
				<b-button
					type="is-danger"
					@click="close"
					:disabled="selection.length == 0"
					>Cerrar</b-button
				>
			</p>
			<p class="control">
				<b-switch
					v-model="filterAgent"
					:rounded="false"
					size="is-medium"
					type="is-primary"
				>
					{{
						filterAgent ? 'Asignadas a mi' : 'Todas las incidencias'
					}}
				</b-switch>
			</p>
			<p class="control">
				<b-switch
					v-model="filterClosed"
					:rounded="false"
					size="is-medium"
					type="is-primary"
				>
					{{ filterClosed ? 'Mostrar abiertas' : 'Mostrar cerradas' }}
				</b-switch>
			</p>
		</b-field>
		<b-table
			:data="filteredTickets"
			:paginated="filteredTickets.length > 10"
			per-page="10"
			:checkable="isAgent"
			:checked-rows.sync="selection"
			hoverable
		>
			<template slot-scope="props">
				<b-table-column
					field="title"
					label="Título"
					sortable
					searchable
				>
					<PopUpTicket :ticket="props.row" :isAgent="isAgent" />
				</b-table-column>

				<b-table-column field="cp" label="Código postal" sortable>{{
					props.row.cp
				}}</b-table-column>

				<b-table-column
					field="street"
					label="Calle"
					sortable
					searchable
					>{{ props.row.street }}</b-table-column
				>

				<b-table-column field="closed" label="Estado" centered>{{
					props.row.closed ? 'Cerrado' : 'Abierto'
				}}</b-table-column>

				<b-table-column field="agentUid" label="Agente asignado">
					{{
						props.row.agentUid != ''
							? props.row.agentUid == currentUserUid
								? 'Yo'
								: isAgent
								? props.row.agentUid
								: 'Si'
							: 'Sin asignar'
					}}
				</b-table-column>

				<b-table-column field="date" label="Fecha" sortable centered>
					<b-tag type="is-success">{{
						new Date(props.row.date).toLocaleDateString()
					}}</b-tag>
				</b-table-column>
			</template>
			<template slot="empty">
				<section class="section">
					<div
						v-if="isAgent"
						class="content has-text-grey has-text-centered"
					>
						<p>
							<b-icon
								icon="package-variant"
								size="is-large"
							></b-icon>
						</p>
						<p>Nada por aquí</p>
					</div>
					<NoTickets v-else />
				</section>
			</template>
		</b-table>
	</div>
</template>

<script>
	import { auth, db } from '@/firebase';
	import { success, warning } from '@/helpers/notificaciones';
	import NoTickets from '@/components/NoTickets';
	import PopUpTicket from '@/components/PopUpTicket';

	export default {
		data: () => ({
			selection: [],
			filterAgent: false,
			filterClosed: false
		}),
		props: {
			isAgent: Boolean
		},
		components: {
			NoTickets,
			PopUpTicket
		},
		computed: {
			currentUserUid() {
				return auth.currentUser.uid;
			},
			filteredTickets() {
				let filter = t =>
					this.isAgent
						? (this.filterAgent
								? t.agentUid == auth.currentUser.uid
								: true) && (this.filterClosed ? t.closed : true)
						: t.userUid == auth.currentUser.uid ||
						  t.allowedUsers.includes(auth.currentUser.uid);
				return this.tickets.filter(filter);
			}
		},
		methods: {
			update(action, condition) {
				let ticketsRef = db.collection('tickets');
				let updatePromises = [];
				this.selection.forEach(selected => {
					if (condition(selected)) {
						let ticket = ticketsRef.doc(selected.id);
						updatePromises.push(ticket.update(action));
						if (selected.hasChildren) {
							let childrenSubCollection = ticket.collection(
								'children'
							);
							childrenSubCollection.get().then(children => {
								children.forEach(child => {
									updatePromises.push(
										childrenSubCollection
											.doc(child.id)
											.update(action)
									);
								});
							});
						}
					}
				});
				Promise.all(updatePromises)
					.then(success('Acción realizada con éxito'))
					.catch(err => {
						warning(err);
					});
				this.selection = [];
			},
			asign() {
				this.update(
					{ agentUid: auth.currentUser.uid },
					t => t.agentUid == ''
				);
			},
			close() {
				this.update({ closed: true }, t => t.closed == false);
			},
			anidar() {
				let parentTicket = this.selection[0];
				let childrenTickets = this.selection.slice(
					1,
					this.selection.length
				);
				let ticketsRef = db.collection('tickets');
				let parentTicketRef = ticketsRef.doc(parentTicket.id);
				let ChildrenRef = parentTicketRef.collection('children');
				let allowedUsers = [];
				let updatePromises = [];
				childrenTickets.forEach(child => {
					allowedUsers.push(child.userUid);
					updatePromises.push(ChildrenRef.doc(child.id).set(child));
					ticketsRef.doc(child.id).delete();
				});
				Promise.all(updatePromises)
					.then(() => {
						success('Incidencias anidadas con éxito');
						console.log('The allowedUsers are', allowedUsers);
						parentTicketRef.update({
							allowedUsers: allowedUsers
						});
					})
					.catch(err => {
						warning(err);
					});
			}
		},
		firestore() {
			let ticketsRef = db.collection('tickets');
			return {
				tickets: ticketsRef.orderBy('date', 'desc')
			};
		}
	};
</script>
