<template>
	<section class="columns box">
		<div class="column is-one-third">
			<b-field>
				<b-upload v-model="dropFiles" :disabled="validImg" multiple drag-drop expanded>
					<section class="section">
						<div class="content has-text-centered">
							<p>
								<b-icon icon="upload" size="is-large"></b-icon>
							</p>
							<p>
								Suelta tus archivos aquí o haz clic para
								subirlos
							</p>
						</div>
					</section>
				</b-upload>
			</b-field>

			<div class="tags">
				<span
					v-for="(file, index) in dropFiles"
					:key="index"
					class="tag is-primary"
				>
					{{ file.name }}
					<button
						class="delete is-small"
						type="button"
						@click="deleteDropFile(index)"
					></button>
				</span>
			</div>
		</div>

		<div class="column">
			<b-field label="Título">
				<b-input
					v-model="titulo"
					placeholder="Ej: Contenedor Arroyo de la Miel"
					maxlength="40"
				></b-input>
			</b-field>

			<b-field label="Descripción">
				<b-input
					maxlength="250"
					type="textarea"
                    placeholder="Ej: El contenedor de reciclaje en el Arroyo de la Miel está..."
					v-model="descripcion"
				></b-input>
			</b-field>

			<div class="columns">
				<div class="column">
					<b-field label="Ubicación">
						<div class="columns">
							<div class="column">
								<b-input
									placeholder="Calle"
									v-model="calle"
								></b-input>
							</div>
							<div class="column is-1">
								<b-numberinput
									placeholder="Nº"
									v-model="numeroCalle"
									:controls="false"
									min=0
								></b-numberinput>
							</div>

							<div class="column is-2">	
								<b-numberinput
									placeholder="Código Postal"
									v-model="CP"
									:controls="false"
									min=29000
								></b-numberinput>
							</div>	
						</div>
					</b-field>
				</div>
			</div>

			<b-button :disabled="valid">Subir</b-button>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				file: {},
				dropFiles: [],
				titulo: '',
				descripcion: '',
				calle: null,
				numeroCalle: null,
				CP: null
			};
		},
		computed: {
			valid: function() {
				return (
					this.titulo.length < 5 ||
					this.descripcion.length < 20 ||
                    this.dropFiles.length < 1 || 
                    this.latitud == null ||
					this.longitud == null ||
					this.CP == null
				);
            },
            validImg: function() {
				return (
					this.dropFiles.length > 2
				);
			}
		},
		methods: {
			deleteDropFile(index) {
				this.dropFiles.splice(index, 1);
			}
		}
	};
</script>
