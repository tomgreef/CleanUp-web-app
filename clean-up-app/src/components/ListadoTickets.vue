<template>
	<section class="section">
		<div v-if="userTickets.length > 0">
			<Ticket
				v-for="ticket in userTickets"
				:key="ticket.id"
				:ticket="ticket"
			/>
		</div>

		<div v-else class="is-centered">
			<NoTickets />
		</div>
	</section>
</template>

<script>
	import { auth, db, storage } from '@/firebase';
	import Ticket from '@/components/Ticket';
	import NoTickets from '@/components/NoTickets';
	export default {
		data: () => ({
			userTickets: []
		}),
		components: {
			Ticket,
			NoTickets
		},
		firestore() {
			db.collection('tickets')
				.where('userUid', '==', auth.currentUser.uid)
				.onSnapshot(snapshot => {
					console.log(
						'Tickets came from',
						snapshot.metadata.fromCache ? 'cache' : 'server'
					);
					snapshot.forEach(t => {
						let ticket = t.data();
						ticket.id = t.id;
						ticket.images = this.getTicketImages(t.id);
						this.userTickets.push(ticket);
					});
				});
		},
		methods: {
			getTicketImages(ticketId) {
				let imagesUrl = [];
				storage
					.ref('tickets')
					.child(ticketId)
					.listAll()
					.then(res => {
						res.items.forEach(iRef => {
							iRef.getDownloadURL().then(url => {
								imagesUrl.push(url);
							});
						});
					});
				return imagesUrl;
			}
		}
	};
</script>
