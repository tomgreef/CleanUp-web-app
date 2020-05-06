<template>
	<div id="app">
		<Hero />
		<router-view />
	</div>
</template>

<script>
	import Hero from '@/components/Hero';

	export default {
		components: {
			Hero
		}
	};
</script>
