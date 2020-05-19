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
		path: '/private',
		name: 'Private',
		component: () => import('@/views/Private'),
		meta: {
			requiresAuth: true,
			allowType: 'user'
		}
	},
	{
		path: '/listadotickets',
		name: 'Listado tickets',
		component: () => import('@/views/ListadoTickets')
	},
	{
		path: '/crearticket',
		name: 'Crear ticket',
		component: () => import('@/views/CrearTicket')
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
		let currentUser = auth().currentUser;
		canContinue = !!currentUser;
		if (canContinue && to.meta.userType) {
			let userType = firestore()
				.collection('users')
				.get(currentUser.uid);
			canContinue = userType != to.meta.userType;
		}
	}
	if (canContinue) {
		next();
	} else {
		next({ name: 'Inicio' });
	}
});

export default router;
