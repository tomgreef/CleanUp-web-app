import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const local = new VuexPersist({
	key: 'local-trip-malager-storage',
	storage: window.localStorage,
	reducer: state => ({
		type: state.type
	})
});

const store = new Vuex.Store({
	state: {
		type: ''
	},
	mutations: {
		change(state, type) {
			state.type = type;
		}
	},
	getters: {
		type: state => state.type
	},
	plugins: [local.plugin]
});

export default store;
