import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from 'firebase';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Inicio',
		component: () => import('@/views/Landing')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(route => route.meta.requiresAuth)) {
		if (!auth().currentUser) {
			next({ name: 'Inicio' });
		}
	} else {
		next();
	}
});

export default router;
