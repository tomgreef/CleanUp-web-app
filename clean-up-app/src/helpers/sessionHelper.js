import { auth, firestore } from 'firebase';

export async function getUserType() {
	let snap = await firestore()
		.collection('users')
		.doc(auth().currentUser.uid)
		.get({ source: 'cache' });
	return snap.data();
}
