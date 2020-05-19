import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth, firestore } from 'firebase';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Inicio',
		component: () => import('@/views/Landing')
	},
	{
		path: '/listadotickets',
		name: 'Listado tickets',
		component: () => import('@/views/ListadoTickets'),
		meta: {
			requiresAuth: true,
			allowType: 'user'
		}
	},
	{
		path: '/crearticket',
		name: 'Crear ticket',
		component: () => import('@/views/CrearTicket'),
		meta: {
			requiresAuth: true,
			allowType: 'user'
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	let canContinue = true;
	if (to.matched.some(route => route.meta.requiresAuth)) {
		console.log('Route requires authentication');

		let currentUser = auth().currentUser;
		console.log('User ' + currentUser);

		canContinue = !!currentUser;
		if (canContinue && to.meta.userType) {
			console.log('Route requires userType');
			let userType;
			firestore()
				.collection('users')
				.get(currentUser.uid)
				.then(response => {
					console.log(response);

					userType = response.data();
				});
			canContinue = userType != to.meta.userType;
		}
	}
	console.log('Can continue? ' + canContinue);

	if (canContinue) {
		next();
	} else {
		next({ name: 'Inicio' });
	}
});

export default router;
