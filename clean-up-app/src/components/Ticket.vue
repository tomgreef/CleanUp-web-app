<template>
	<article class="media">
		<figure class="media-left">
			<b-icon icon="ticket" size="is-large"> </b-icon>
		</figure>
		<div class="media-content">
			<div class="content">
				<p>
					<strong>{{ title }}</strong> - {{ id }}
					<br />
					{{ description }}
				</p>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'Ticket',
		props: {
			id: String,
			title: String,
			description: String
		}
	};
</script>
