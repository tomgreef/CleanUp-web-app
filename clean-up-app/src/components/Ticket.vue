<template>
	<article class="media">
		<figure class="media-left">
			<p class="image is-128x128">
				<img :src="ticket.images[0]" alt="re" />
			</p>
		</figure>
		<div class="media-content">
			<div class="content">
				<p>
					<strong>{{ ticket.title }}</strong>
					<small> {{ ticket.id }}</small>
					<br />
					{{ ticket.description }}
					<br />
					<strong
						>Ubicación: {{ ticket.cp }} {{ ticket.street }}
						{{ ticket.streetNumber }}</strong
					>
				</p>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		props: {
			ticket: Object
		}
	};
</script>
