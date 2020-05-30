import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import LoginForm from '@/components/LoginForm.vue';

describe("LoginForm.vue", function() {
    let component = shallowMount(LoginForm);
    it('should throw error', function() {
        expect(function(){
            component.inicio("hffhfhfhfh", "gdgdgdgdgdgd").to.throw('auth/invalid-email');
        })
    });
});