module.exports = function(error) {
	let msg = '';
	switch (error.code) {
		case 'auth/invalid-email':
			msg = 'El email es invalido';
			break;
	}
	return msg;
};
