import { auth, db } from '@/firebase';

async function cacheManager(ref) {
	let snap;
	try {
		snap = await ref.get({ source: 'cache' });
	} catch (err) {
		snap = await ref.get({ source: 'server' });
	}
	return snap;
}

export async function getUserType() {
	let type = null;
	if (auth.currentUser) {
		let snap = await cacheManager(
			db.collection('users').doc(auth.currentUser.uid)
		);
		type = snap.data().type;
	}
	return type;
}
