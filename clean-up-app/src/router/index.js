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
