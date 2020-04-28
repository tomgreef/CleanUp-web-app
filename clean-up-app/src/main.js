import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import firebase from 'firebase';
import './assets/scss/app.scss';

Vue.use(Buefy);

Vue.config.productionTip = false;

const firebaseConfig = {
	apiKey: 'AIzaSyCEZ-xMjsoJlJyyeMdL3rNiHA-454Nxres',
	authDomain: 'clean-up-e3ad6.firebaseapp.com',
	databaseURL: 'https://clean-up-e3ad6.firebaseio.com',
	projectId: 'clean-up-e3ad6',
	storageBucket: 'clean-up-e3ad6.appspot.com',
	messagingSenderId: '223341924469',
	appId: '1:223341924469:web:069b6c81d1c7cc2601283c',
	measurementId: 'G-EPFMYW0M7H'
};

firebase.initializeApp(firebaseConfig);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
