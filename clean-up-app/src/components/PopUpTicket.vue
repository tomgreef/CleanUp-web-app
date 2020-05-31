<template>
	<section>
		<a v-if="!isChild" expanded @click="isTicketModalActive = true">
			<p class="has-text-left">
				{{ ticket.title }}
			</p>
		</a>
		<b-button
			v-else
			@click="isTicketModalActive = true"
			type="is-primary"
			expanded
		>
			{{ ticket.title }}
		</b-button>

		<b-modal :active.sync="isTicketModalActive" :width="720">
			<div class="card">
				<b-carousel :autoplay="false" :indicator-inside="false">
					<b-carousel-item
						v-for="(url, i) in ticket.images"
						:key="i"
						class="card-image"
					>
						<figure class="image">
							<img :src="url" />
						</figure>
					</b-carousel-item>
				</b-carousel>
				<div class="card-content">
					<div class="media">
						<div class="media-content box">
							<h4 class="title is-4">{{ ticket.title }}</h4>
							<p>
								CP: {{ ticket.cp }}, {{ ticket.street }}
								<span v-if="ticket.streetNumber != null">
									, número
									{{ ticket.streetNumber }}
								</span>
							</p>
							<hr />
							<h4 class="title is-4">Descripción</h4>
							<p>
								{{ ticket.description }}
							</p>
							<SubTicketPagination
								v-if="ticket.hasChildren"
								:isAgent="isAgent"
								:parentId="ticket.id"
							/>
						</div>
					</div>
					<div class="content">
						<CommentList :ticketId="ticket.id" />
						<br v-if="showCreateComment" />
						<CreateComment
							:ticketId="ticket.id"
							v-if="showCreateComment"
						/>
					</div>
				</div>
			</div>
		</b-modal>
	</section>
</template>

<script>
	import CommentList from '@/components/CommentList';
	import CreateComment from '@/components/CreateComment';
	import SubTicketPagination from '@/components/SubTicketPagination';

	export default {
		name: 'PopUpTicket',
		data: () => ({
			isTicketModalActive: false
		}),
		props: {
			ticket: Object,
			isAgent: Boolean,
			isChild: Boolean
		},
		components: {
			CommentList,
			CreateComment,
			SubTicketPagination
		},
		computed: {
			showCreateComment() {
				return this.isAgent && !this.ticket.closed;
			}
		}
	};
</script>
