<template>
	<section>
		<a expanded @click="isCardModalActive = true">
			<p class="has-text-left">
				{{ ticket.title }}
			</p>
		</a>
		<b-modal :active.sync="isCardModalActive" :width="720">
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
						<div class="media-content">
							<h4 class="title is-4">{{ ticket.title }}</h4>
							<h6 class="subtitle is-6">
								CP: {{ ticket.cp }}, {{ ticket.street }}
								<span v-if="ticket.streetNumber != null">
									, número
									{{ ticket.streetNumber }}
								</span>
							</h6>
							<p>
								<strong>Descripción</strong>
								<br />
								{{ ticket.description }}
							</p>
						</div>
					</div>
					<div class="content">
						<CommentList :ticketId="ticket.id" />
						<br />
						<CreateComment :ticketId="ticket.id" />
					</div>
				</div>
			</div>
		</b-modal>
	</section>
</template>

<script>
	import CommentList from '@/components/CommentList';
	import CreateComment from '@/components/CreateComment';
	export default {
		data: () => ({
			isCardModalActive: false
		}),
		props: {
			ticket: Object
		},
		components: {
			CommentList,
			CreateComment
		}
	};
</script>
