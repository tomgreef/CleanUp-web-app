<template>
	<section>
		<div class="buttons">
			<b-button
				type="is-primary"
				@click="isCardModalActive = true"
				inverted
				expanded
			>
				{{ ticket.title }}
			</b-button>
		</div>

		<b-modal :active.sync="isCardModalActive" :width="640">
			<div class="card">
				<div class="card-image">
					<b-carousel :autoplay="false" :indicator-inside="false">
						<b-carousel-item
							v-for="(url, i) in ticket.images"
							:key="i"
						>
							<figure class="image">
								<img :src="url" />
							</figure>
						</b-carousel-item>
					</b-carousel>
				</div>
				<div class="card-content">
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
							{{ ticket.description }}
						</p>
						<br />
						<CommentList />
						<br />
						<CreateComment />
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
