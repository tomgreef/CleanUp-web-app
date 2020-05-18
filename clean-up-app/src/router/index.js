import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Inicio',
		component: () => import('@/views/Inicio')
	},
	{
		path: '/Ticket',
		name: 'Ticket',
		component: () => import('@/views/Ticket')
	},
	{
		path: '/PaginaInicioUsuario',
		name: 'PaginaInicioUsuario',
		component: () => import('@/views/PaginaInicioUsuario')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
