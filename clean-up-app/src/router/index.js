import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from '@/firebase';
import store from '@/store/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('@/views/Landing'),
		meta: {
			title: 'Inicio'
		}
	},
	// Rutas de usuario
	{
		path: '/mistickets',
		component: () => import('@/views/HomeUser'),
		meta: {
			title: 'Mis tickets',
			userType: 'user'
		}
	},
	{
		path: '/crearticket',
		component: () => import('@/views/CrearTicket'),
		meta: {
			title: 'Crear ticket',
			userType: 'user'
		}
	},
	// Rutas de agente
	{
		path: '/inicioagente',
		component: () => import('@/views/HomeAgent'),
		meta: {
			title: 'Inicio de agente',
			userType: 'agent'
			// userType: 'agent'
		}
	},
	{
		path: '/GDPR',
		component: () => import('@/views/GDPR'),
		meta: {
			title: 'GDPR'
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;

	function homeRedirect(type) {
		switch (type) {
			case 'user':
				next({ path: '/mistickets' });
				break;
			case 'agent':
				next({ path: '/inicioagente' });
				break;
		}
	}

	if (!auth.currentUser) {
		if (!to.meta.userType) {
			next();
		} else {
			next({ path: '/' });
		}
	} else {
		let type = store.getters.type;
		if (to.path == '/home' || to.path == '/') {
			homeRedirect(type);
		} else if (!to.meta.userType || to.meta.userType == type) {
			next();
		} else {
			homeRedirect(type);
		}
	}
});

export default router;
