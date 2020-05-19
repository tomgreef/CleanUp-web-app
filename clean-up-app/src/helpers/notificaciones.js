import { SnackbarProgrammatic as Snackbar } from 'buefy';

export function warning(msg) {
	Snackbar.open({
		duration: 5000,
		message: msg,
		type: 'is-warning',
		position: 'is-top',
		actionText: 'Ok',
		indefinite: true
	});
}

export function success(msg) {
	Snackbar.open({
		duration: 5000,
		message: msg,
		type: 'is-success',
		position: 'is-top',
		actionText: 'Ok',
		indefinite: true
	});
}
