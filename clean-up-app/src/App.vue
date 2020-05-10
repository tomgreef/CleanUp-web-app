<template>
	<div id="app">
		<Hero />
		<router-view />
		<Footer />

	

	</div>
</template>

<script>
	import Hero from '@/components/Hero';
	import Footer from '@/components/Footer';
	
	export default {
		components: {
			Hero ,
			Footer
		}
	};
</script>
