import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from '@/firebase';
import { getUserType } from '@/helpers/sessionHelper';

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
		if (to.path == '/') {
			next();
		} else {
			next({ path: '/' });
		}
	} else {
		getUserType().then(type => {
			let metaUserType = to.meta.userType;
			if (metaUserType && metaUserType == type) {
				next();
			} else {
				homeRedirect(type);
			}
		});
	}
});

export default router;
