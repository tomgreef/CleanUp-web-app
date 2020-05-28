<template>
	<div>
		<b-collapse
			animation="slide"
			:open.sync="isOpen"
			v-if="this.comments ? this.comments.length > 0 : false"
		>
			<p class="panel-heading" slot="trigger">
				<strong> Listado de comentarios</strong>
				<b-icon :icon="isOpen ? 'menu-down' : 'menu-up'"> </b-icon>
			</p>
			<p
				v-for="comment in comments"
				:key="comment.id"
				class="panel-block is-marginless"
			>
				<Comment :comment="comment" />
			</p>
		</b-collapse>
		<p v-else class="box">
			<strong>Aún no hay comentarios en esta incidencia</strong>
		</p>
	</div>
</template>

<script>
	import { db } from '@/firebase';
	import Comment from '@/components/Comment';
	export default {
		data: () => ({
			isOpen: true
		}),
		props: {
			ticketId: String
		},
		components: {
			Comment
		},
		firestore() {
			return {
				comments: db
					.collection('tickets')
					.doc(this.ticketId)
					.collection('comments')
					.orderBy('date')
			};
		}
	};
</script>
