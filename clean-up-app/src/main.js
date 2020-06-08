import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Buefy from 'buefy';
import { auth } from '@/firebase';
import store from '@/store/store';
import VueFirestore from 'vue-firestore';
import './assets/scss/app.scss';

let app = '';

Vue.use(Buefy);
Vue.use(VueFirestore);

Vue.config.productionTip = false;

auth.onAuthStateChanged(() => {
	if (!app) {
		new Vue({
			store,
			router,
			render: h => h(App)
		}).$mount('#app');
	}
});
