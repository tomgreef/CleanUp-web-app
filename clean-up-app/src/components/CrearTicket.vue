<template>
	<section class="box">
		<b-field
			label="Título"
			label-position="on-border"
			position="is-centered"
			expanded
		>
			<b-input
				v-model="titulo"
				placeholder="Ej: Contenedor Arroyo de la Miel"
				maxlength="40"
			></b-input>
		</b-field>

		<b-field
			label="Descripción"
			label-position="on-border"
			position="is-centered"
		>
			<b-input
				maxlength="250"
				type="textarea"
				placeholder="Ej: El contenedor de reciclaje en el Arroyo de la Miel está..."
				v-model="descripcion"
			></b-input>
		</b-field>

		<b-field grouped group-multiline position="is-centered">
			<b-field label="Código postal" label-position="on-border" expanded>
				<b-numberinput
					placeholder="29007"
					v-model="CP"
					:controls="false"
					min="29000"
				></b-numberinput>
			</b-field>
			<b-field label="Calle" label-position="on-border" expanded>
				<b-input placeholder="Calle cómpeta" v-model="calle"></b-input>
			</b-field>
			<b-field label="Número" label-position="on-border" expanded>
				<b-numberinput
					placeholder="Nº 42"
					v-model="numeroCalle"
					:controls="false"
					min="0"
				></b-numberinput>
			</b-field>
		</b-field>
		<br />
		<b-field>
			<div class="columns is-centered">
				<div class="column is-half">
					<b-upload
						v-model="images"
						:disabled="invalidImg || invalidSize"
						multiple
						accept="image/*"
						drag-drop
						expanded
					>
						<section class="section">
							<div class="content has-text-centered">
								<p>
									<b-icon
										icon="upload"
										size="is-large"
									></b-icon>
								</p>
								<p>
									Suelta tus archivos aquí o haz clic para
									subirlos
								</p>
								<p>{{ images.length }} / 3</p>
							</div>
						</section>
					</b-upload>
					<div class="tags">
						<span
							v-for="(image, index) in images"
							:key="index"
							:class="'tag has-text-centered ' + getType(index)"
						>
							{{ image.name }}
							<button
								class="delete is-small"
								type="button"
								@click="deleteDropFile(index)"
							></button>
						</span>
					</div>
				</div>
			</div>
		</b-field>
		<b-button
			:disabled="invalid"
			type="is-primary"
			@click="createTicket"
			expanded
			>Crear la incidencia</b-button
		>
	</section>
</template>

<script>
	import firebase from 'firebase';
	import { warning } from '@/helpers/notificaciones';
	import { success } from '@/helpers/notificaciones';

	export default {
		data: () => ({
			titulo: '',
			descripcion: '',
			CP: null,
			calle: '',
			numeroCalle: null,
			images: []
		}),
		computed: {
			invalid() {
				return (
					this.titulo.length < 5 ||
					this.descripcion.length < 20 ||
					this.CP == null ||
					this.calle.length < 10 ||
					this.images.length < 1 ||
					this.images.length > 3
				);
			},
			invalidImg() {
				let invalid = this.images.length > 3;
				if (invalid) {
					warning('El límite es de 3 imagenes');
				}
				return invalid;
			},
			invalidSize() {
				let invalid = true;
				if (this.images.length > 0) {
					let image = this.images[this.images.length - 1];
					invalid = image.size > 15 * 1024 * 1024;
					if (invalid) {
						warning('Las imagenes no pueden pesar más de 15mb');
					}
				} else {
					invalid = false;
				}
				return invalid;
			}
		},
		methods: {
			getType(index) {
				let type = 'is-primary';
				if (this.images[index].size > 10 * 1024 * 1024) {
					type = 'is-danger';
				}
				return type;
			},
			deleteDropFile(index) {
				this.images.splice(index, 1);
			},
			uploadImages(ticketId) {
				for (let i = 0; i < this.images.length; i++) {
					let image = this.images[i];
					let ref = firebase.storage().ref();
					let ticketRef = ref.child('tickets/' + ticketId);
					let imageRef = ticketRef.child(image.name);
					imageRef.put(image);
				}
			},
			createTicket() {
				let uid = firebase.auth().currentUser.uid;
				firebase
					.firestore()
					.collection('tickets')
					.add({
						title: this.titulo,
						description: this.descripcion,
						street: this.calle,
						streetNumber: this.numeroCalle,
						CP: this.CP,
						user_uid: uid,
						agent_uid: '',
						closed: false
					})
					.then(ticket => {
						this.uploadImages(ticket.id);
						success('Su ticket ha sido creado satisfactoriamente');
						this.$router.replace({ name: 'Listado tickets' });
					});
			}
		}
	};
</script>
