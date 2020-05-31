<template>
	<div class="buttons level-right">
		 <button class="button is-danger" @click="confirmCustomDelete">
                Eliminar Perfil
            </button>
	</div>
</template>

<script>
    export default {
        methods: {
            confirmCustomDelete() {
                this.$buefy.dialog.confirm({
                    title: 'Eliminando cuenta',
                    message: '¿Estas seguro que quieres <b>eliminar</b> tu cuenta? Esta acción no se puede deshacer.',
                    confirmText: 'Eliminar Cuenta',
                    type: 'is-danger',
                    hasIcon: true,
					onConfirm: () => this.$buefy.toast.open('¡Cuenta Eliminada!'),
					cancelText: 'Cancelar'
                })
            }
        }
    }
</script>