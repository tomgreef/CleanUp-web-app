import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', function() {
	let component;

	beforeEach(() => {
		component = shallowMount(LoginForm);
	});

	it('boton', function() {
		expect(true).toBe(true);
	});
});
