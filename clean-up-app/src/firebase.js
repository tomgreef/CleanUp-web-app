import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCEZ-xMjsoJlJyyeMdL3rNiHA-454Nxres',
	authDomain: 'clean-up-e3ad6.firebaseapp.com',
	databaseURL: 'https://clean-up-e3ad6.firebaseio.com',
	projectId: 'clean-up-e3ad6',
	storageBucket: 'clean-up-e3ad6.appspot.com',
	messagingSenderId: '223341924469',
	appId: '1:223341924469:web:069b6c81d1c7cc2601283c',
	measurementId: 'G-EPFMYW0M7H'
});

if (process.env.NODE_ENV != 'test') {
	firebaseApp
		.firestore()
		.enablePersistence()
		.catch(err => {
			console.log('Error when enabling persistence:', err);
		});
}

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();

export default {
	auth,
	db,
	storage
};
