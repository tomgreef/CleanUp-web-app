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

export default router;
