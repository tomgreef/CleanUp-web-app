import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from '@/firebase';
import { getUserType } from '@/helpers/sessionHelper';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('@/views/UserLanding'),
		meta: {
			title: 'Inicio'
		}
	},
	{
		path: '/mistickets',
		component: () => import('@/views/TicketsUsuario'),
		path: '/landingagente',
		name: 'LandingAgente',
		component: () => import('@/views/LandingAgente')
	},
	{
		path: '/inicioagente',
		name: 'InicioAgente',
		component: () => import('@/views/PaginaInicioAgente'),
		meta:{
			requiresAuth: true,
			allowType: 'agent'
		}
	},
	{
		path: '/listadotickets',
		name: 'ListadoTickets',
		component: () => import('@/views/ListadoTickets'),
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
	{
		path: '/HomeAgent',
		name: 'HomeAgent',
		component: () => import('@/views/HomeAgent'),
		meta: {
			// allowType: 'agent'
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
				next({ path: '/listadotickets' });
				break;
		}
	}

	if (!auth.currentUser) {
		if (to.path == '/' || to.path == '/agentlanding') {
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
