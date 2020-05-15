<template>
	<div id="app">
		<Hero />
		<router-view id="view" />
		<Footer id="footer" />
	</div>
</template>

<style scoped>
	#app {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	#view {
		flex: 1;
	}
</style>

<script>
	import Hero from '@/components/Hero';
	import Footer from '@/components/Footer';

	export default {
		components: {
			Hero,
			Footer
		}
	};
</script>
