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

function getSnap(uid) {
	let ref = db.collection('users').doc(uid);
	return cacheManager(ref);
}

export async function getUserType() {
	let type = null;
	if (auth.currentUser) {
		let snap = await getSnap(auth.currentUser.uid);
		type = snap.data().type;
	}
	return type;
}
