<template>
	<section>
		<div class="buttons">
			<button
				class="button is-primary is-medium"
				@click="isCardModalActive = true"
			>
				Launch card modal
			</button>
		</div>

		<b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
			<div class="card">
				<div class="card-image">
					<b-carousel :indicator-inside="false">
						<b-carousel-item v-for="(images, i) in 3" :key="i">
							<span class="image">
								<img :src="ticket.images[i]"/>
							</span>
						</b-carousel-item>
					</b-carousel>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-content">
							<p class="title is-4">ticket.titulo</p>
							<p class="subtitle is-6">ticket.calle ticket.numero, ticket.cp</p>
						</div>
					</div>

					<div class="content">
						{{ticket.descripcion}}
					</div>

					<div>
						<CreateComment/>
						<CommentList/>
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
			ticket: {
				images: [
					'https://media.gettyimages.com/photos/broken-glass-on-street-picture-id559545425?s=612x612',
					'http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201408/337984715.jpg',
					'http://wallpaper21.com/wp-content/uploads/2017/08/City-Silhouette-At-Sunset-HD-desktop-High-Definition-wallpaper-wpt7003299.jpg'
				],
				titulo: 'Jose sabe bailar',
				descripcion: 'Mueve las caderas muy bien',
				calle: 'Camino del pato',
				numero: '32',
				cp: 29000
			}
		}),
		components: {
			CommentList,
			CreateComment
		}
	};
</script>