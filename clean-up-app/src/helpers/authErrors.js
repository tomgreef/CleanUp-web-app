module.exports = function(error) {
	let msg = '';
	switch (error.code) {
		case 'auth/invalid-email':
			msg = 'El email es invalido';
			break;
		case 'auth/invalid-password':
			msg = 'La contraseña es invalida'
			break;
	}
	return msg;
};
