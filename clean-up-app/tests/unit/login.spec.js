import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import LoginForm from '@/components/LoginForm.vue';
import { auth } from '@/firebase';

describe("LoginForm.vue", function() {
    let component = shallowMount(LoginForm);
    it('should throw error when wrong email', function() {
        expect(function(){
            component.inicio("hffhfhfhfh", "randompassword").to.throw('auth/invalid-email');
        })
    });
    it('should throw error when user does not exists', function() {
        expect(function(){
            component.inicio("random@gmail.com", "randompassword").to.throw('auth/user-not-found');
        })
    });
    it('should throw error when wrong password', function() {
        auth.createUserWithEmailAndPassword("random@gmail.com", "randompassword");
        expect(function(){
             component.inicio("random@gmail.com", "wrongpassword").to.throw('auth/wrong-password');
        });
    });
});