import { shallowMount } from '@vue/test-utils';
import CreateTicket from '@/components/CreateTicket.vue';

describe('Create ticket button', () => {
    const WrongImagesNumber = ['0', '1', '2', '3'],
    RightImagesNumber = ['0', '1'];

    it('should be disabled when null parameters', () =>{
        const wrapper = shallowMount(CreateTicket);
        expect(
			wrapper.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
    });

    it('should be disabled when wrong parameters', () =>{
        const wrapper = shallowMount(CreateTicket, {
            data() {
                return {
                    images: WrongImagesNumber
                }
            }
        });
        expect(
            wrapper.get('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be disabled when images are too big', () =>{
        const wrapper = shallowMount(CreateTicket, {
            data() {
                return {
                    images: RightImagesNumber
                }
            },
            computed: {
                invalidSize() {
                    return true;
                }
            }
        });
        expect(
            wrapper.get('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be abled when everything is ok', () =>{
        const wrapper = shallowMount(CreateTicket, {
            computed: {
                invalidSize() {
                    return false;
                },
                invalid() {
                    return false;
                }
            }
        });
        expect(
            wrapper.get('b-button-stub').attributes('disabled')
        ).toBeFalsy();
    });
    
})