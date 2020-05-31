<template>
	<article class="media">
		<div class="media-content">
			<div class="content">
				<p>
					<strong>{{ comment.agentId }}</strong
					>, {{ new Date(comment.date).toLocaleString() }}
					<br />
					{{ comment.message }}
				</p>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		props: {
			comment: Object
		}
	};
</script>
