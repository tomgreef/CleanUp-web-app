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
				(row, index) => $buefy.toast.open(`Expanded ${row.titulo}`)
			"
			:show-detail-icon="false"
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
						{{
							new Date(props.row.data().date).toLocaleDateString()
						}}
					</span>
				</b-table-column>
			</template>

			<template slot="detail" slot-scope="props">
				<article class="media">
					<figure class="media-left">
						<p class="image is-128x128">
							<img src="http://icons.iconarchive.com/icons/chrisl21/minecraft/512/Creeper-icon.png" alt="Image">
						</p>
					</figure>
					<div class="media-content">
						<div class="content">
							<p>
							    {{ props.row.descripcion }}
                            </p>
						</div>
                        <div>
                            <p>
                                <strong>Dirección: </strong>
							    {{ props.row.direccion }}
                            </p>
                        </div>
					</div>
				</article>
			</template>
		</b-table>
	</section>
</template>

<script>
	import { db } from '@/firebase';

	import PopUpTicketAgente from '@/components/PopUpTicketAgente';
	export default {
		data() {
			return {
				tickets: [],
				defaultOpenedDetails: [1],
				showDetailIcon: true
			};
		},
		methods: {
			toggle(row) {
				this.$refs.table.toggleDetails(row);
			}
		},
		firestore() {
			db.collection('tickets').onSnapshot(snapshot => {
				console.log(
					'This came from:',
					snapshot.metadata.fromCache ? 'cache' : 'database'
				);
				snapshot.forEach(ticket => {
					this.tickets.push(ticket);
				});
			});
		},
		components: {
			PopUpTicketAgente
		}
	};
</script>
