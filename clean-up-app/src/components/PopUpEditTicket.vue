<template>
	<section>
		<b-button
			expanded
			type="is-primary"
			@click="isEditTicketModalActive = true"
			:disabled="ticket.closed"
		>Editar</b-button>
		<b-modal :active.sync="isEditTicketModalActive" :width="720">
			<div class="card box">
				<b-field
					label="Titulo"
					label-position="on-border"
					:message="
				title.length > 0 && title.length < 10
					? 'El título debe tener 10 caracteres como mínimo'
					: ''
			"
				>
					<b-input v-model="title"></b-input>
				</b-field>

				<b-field
					label="Descripción"
					label-position="on-border"
					:message="
				description.length > 0 && description.length < 20
					? 'La descripcion debe tener 20 caracteres como mínimo'
					: ''
			"
				>
					<b-input v-model="description" maxlength="250" type="textarea"></b-input>
				</b-field>

				<b-field label="Código postal" label-position="on-border">
					<b-numberinput :controls="false" v-model="cp" min="29000" max="29999"></b-numberinput>
				</b-field>

				<b-field
					label="Calle"
					label-position="on-border"
					:message="
					street.length > 0 && street.length < 10
						? 'La calle debe tener 10 caracteres como mínimo'
						: ''
				"
				>
					<b-input v-model="street"></b-input>
				</b-field>

				<b-field label="Número" label-position="on-border">
					<b-numberinput :controls="false" v-model="streetNumber" min="0" max="999"></b-numberinput>
				</b-field>

				<p class="control">
					<b-button type="is-primary" expanded @click="saveChanges" :disabled="invalid">Guardar</b-button>
				</p>
			</div>
		</b-modal>
	</section>
</template>

<script>
import { db } from '@/firebase';
import { success } from '@/helpers/notificaciones';
import { invalidTextSize } from '@/helpers/ticketHelper';

export default {
	data: () => ({
		title: '',
		description: '',
		cp: '',
		street: '',
		streetNumber: '',
		isEditTicketModalActive: false
	}),
	props: {
		ticket: Object
	},
	mounted() {
		this.title = this.ticket.title;
		this.description = this.ticket.description;
		this.cp = this.ticket.cp;
		this.street = this.ticket.street;
		this.streetNumber = this.ticket.streetNumber;
	},
	methods: {
		saveChanges() {
			db.collection('tickets')
				.doc(this.ticket.id)
				.update({
					title: this.title,
					description: this.description,
					cp: this.cp,
					street: this.street,
					streetNumber: this.streetNumber
				})
				.then(() => {
					success(
						'Incidencia modificada con éxito. Recarga para ver los cambios'
					);
					this.isEditTicketModalActive = false;
				});
		}
	},
	computed: {
		invalid() {
			return invalidTextSize(
				this.title,
				this.description,
				this.cp,
				this.streetNumber,
				this.street
			);
		}
	}
};
</script>