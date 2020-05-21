import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from 'firebase';
import { getUserType } from '@/helpers/sessionHelper';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Inicio',
		component: () => import('@/views/Landing')
	},
	{
		path: '/listadotickets',
		name: 'ListadoTickets',
		component: () => import('@/views/ListadoTickets'),
		meta: {
			requiresAuth: true,
			allowType: 'user'
		}
	},
	{
		path: '/crearticket',
		name: 'CrearTicket',
		component: () => import('@/views/CrearTicket'),
		meta: {
			requiresAuth: true,
			allowType: 'user'
		}
	},
	{
		path: '/HomeAgent',
		name: 'HomeAgent',
		component: () => import('@/views/HomeAgent'),
		meta: {
			requiresAuth: false,
			//Cambiar a true
			
			allowType: 'agent'
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
	let isLoggedIn = !!auth().currentUser;
	let userType = getUserType();

	if (isLoggedIn && to.path == '/') {
		next({ name: 'ListadoTickets' });
	} else if (to.matched.some(route => route.meta.requiresAuth)) {
		canContinue = isLoggedIn;
		if (canContinue && to.meta.userType) {
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
