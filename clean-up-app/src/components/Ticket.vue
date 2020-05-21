<template>
	<div>
		<p>
			<strong>ID: {{ ticket.id }}</strong>
		</p>
		<p>
			<strong>Titulo: {{ ticket.title }}</strong>
		</p>
		<p>
			<strong>fechaCreacion: {{ ticket.date }}</strong>
		</p>
		<p>
			<strong>Cerrado: {{ ticket.closed }}</strong>
		</p>
		<p>
			<strong>descripcion: {{ ticket.description }}</strong>
		</p>
		<p>
			<strong>Usuario: {{ ticket.userUid }}</strong>
		</p>
		<p>
			<strong
				>Ubicación: {{ ticket.cp }} {{ ticket.street }}
				{{ ticket.streetNumber }}</strong
			>
		</p>
		<figure
			class="image is-128x128"
			v-for="image in ticket.images"
			:key="image"
		>
			<img :src="image" alt="re" />
		</figure>
	</div>
</template>

<script>
	export default {
		props: {
			ticket: Object
		}
	};
</script>
