import { auth, firestore } from 'firebase';

async function getSnap(uid) {
	let ref = firestore()
		.collection('users')
		.doc(uid);
	const snap = await ref.get({ source: 'cache' });
	return snap;
}

export async function getUserType() {
	const snap = await getSnap(auth().currentUser.uid);
	return snap.data().type;
}
