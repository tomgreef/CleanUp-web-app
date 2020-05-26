module.exports = function(error) {
	let msg = '';
	switch (error.code) {
		// Errores de creación de cuenta
		case 'auth/invalid-email':
			msg = 'El email es invalido';
			break;
		case 'auth/account-exists-with-different-credential':
		case 'auth/credential-already-in-use':
		case 'auth/email-already-in-use':
			msg = 'El usuario ya existe, inicia sesión';
			break;
		// Errores de inicio de sesion
		case 'auth/invalid-password':
			msg = 'La contraseña es invalida';
			break;
		case 'auth/wrong-password':
			msg = 'La contraseña es incorrecta';
			break;
		case 'auth/user-not-found':
			msg = 'El usuario no existe';
			break;
	}
	return msg;
};
