import { SnackbarProgrammatic as Snackbar } from 'buefy';

export function warning(msg) {
	Snackbar.open({
		duration: 2500,
		message: msg,
		type: 'is-warning',
		position: 'is-top',
		actionText: 'Ok',
		indefinite: false
	});
}

export function success(msg) {
	Snackbar.open({
		duration: 2500,
		message: msg,
		type: 'is-success',
		position: 'is-top',
		actionText: 'Ok',
		indefinite: false
	});
}

export default {
	success,
	warning
};
