import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		type: ''
	},
	mutations: {
		changeType(state, type) {
			state.type = type;
		}
	},
	getters: {
		type: state => state.type
	}
});
