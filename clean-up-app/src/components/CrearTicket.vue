<template>
	<section class="box">
		<b-field
			label="Título"
			label-position="on-border"
			position="is-centered"
			expanded
			:message="
				titulo.length > 0 && titulo.length < 10
					? 'El título debe tener 10 caracteres como mínimo'
					: ''
			"
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
			:message="
				descripcion.length > 0 && descripcion.length < 20
					? 'La descripcion debe tener 20 caracteres como mínimo'
					: ''
			"
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
					max="29999"
				></b-numberinput>
			</b-field>
			<b-field
				label="Calle"
				label-position="on-border"
				expanded
				:message="
					calle.length > 0 && calle.length < 10
						? 'La calle debe tener 10 caracteres como mínimo'
						: ''
				"
			>
				<b-input placeholder="Calle cómpeta" v-model="calle"></b-input>
			</b-field>
			<b-field label="Número" label-position="on-border" expanded>
				<b-numberinput
					placeholder="Nº 42"
					v-model="numeroCalle"
					:controls="false"
					min="0"
					max="999"
				></b-numberinput>
			</b-field>
		</b-field>
		<br />
		<b-field>
			<div class="columns is-centered">
				<div class="column is-half">
					<b-upload
						v-model="images"
						:disabled="!imgLimit || invalidImgLimit || invalidSize"
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
		<br />
		<b-button
			:disabled="invalid || invalidSize"
			type="is-primary"
			@click="createTicket"
			expanded
			>Crear la incidencia</b-button
		>
	</section>
</template>

<script>
	import { auth, db, storage } from '@/firebase';
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
					this.titulo.length < 10 ||
					this.descripcion.length < 20 ||
					this.CP == null ||
					this.CP > 29999 ||
					this.numeroCalle < 0 ||
					this.numeroCalle > 999 ||
					this.calle.length < 10 ||
					this.images.length < 1 ||
					this.images.length > 3
				);
			},
			invalidSize() {
				let invalid = false;
				let tooBig = element => element.size > 15 * 1024 * 1024;
				if (this.images.length > 0) {
					invalid = this.images.some(tooBig);
					if (invalid) {
						warning('Las imagenes no pueden pesar más de 15mb');
					}
				}
				return invalid;
			},
			imgLimit() {
				return this.images.length < 3;
			},
			invalidImgLimit() {
				let invalid = this.images.length > 3;
				if (invalid) {
					warning('El límite es de 3 imagenes');
				}
				return invalid;
			}
		},
		methods: {
			getType(index) {
				let type = 'is-primary';
				if (this.images[index].size > 15 * 1024 * 1024) {
					type = 'is-danger';
				}
				return type;
			},
			deleteDropFile(index) {
				this.images.splice(index, 1);
			},
			getUploadPromises(ticketId) {
				let uploadPromises = [];
				let ticketRef = storage.ref().child('tickets/' + ticketId);
				this.images.forEach(image => {
					uploadPromises.push(ticketRef.child(image.name).put(image));
				});
				return Promise.all(uploadPromises);
			},
			getDownloadPromises(tasks) {
				let downloadPromises = [];
				tasks.forEach(task => {
					downloadPromises.push(task.ref.getDownloadURL());
				});
				return Promise.all(downloadPromises);
			},
			createTicket() {
				let uid = auth.currentUser.uid;
				let ticketRef = db.collection('tickets').doc();
				this.getUploadPromises(ticketRef.id).then(tasks => {
					let imagesUrl = [];
					this.getDownloadPromises(tasks)
						.then(urls => {
							urls.forEach(url => {
								imagesUrl.push(url);
							});
						})
						.then(() => {
							db.collection('tickets')
								.doc(ticketRef.id)
								.set({
									id: ticketRef.id,
									title: this.titulo,
									description: this.descripcion,
									street: this.calle,
									streetNumber: this.numeroCalle,
									cp: this.CP,
									date: Date.now(),
									images: imagesUrl,
									userUid: uid,
									agentUid: '',
									closed: false
								})
								.then(() => {
									success(
										'Su ticket ha sido creado satisfactoriamente'
									);
									this.$router.replace({
										path: '/mistickets'
									});
								});
						});
				});
			}
		}
	};
</script>
