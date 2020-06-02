import { shallowMount } from '@vue/test-utils';
import CreateTicket from '@/components/CreateTicket.vue';

describe('Create ticket button', () => {
    const WrongTitle = 'abc',
		RightTitle = 'NiceTittle',
		WrongDescription = 'abc',
        RightDescription = 'This description is nice',
        WrongCP = 19999,
        WrongCP2 = 30000,
        RightCP = 25000,
        WrongStreet = 'abc',
        RightStreet = 'NiceStreet',
        WrongStreetNumber = -1,
        WrongStreetNumber2 = 1000,
        RightStreetNumber = 500,
        WrongImagesNumber = ['0', '1', '2', '3'],
        RightImagesNumber = ['0', '1'];
    
    it('should be disabled when null parameters', () =>{
        const wrapper = shallowMount(CreateTicket);
        expect(
			wrapper.get('b-button-stub').attributes('disabled')
		).toBeTruthy();
    });

    it('should be disabled when wrong parameters', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: WrongTitle,
                    description: WrongDescription,
			        cp: WrongCP,
			        street: WrongStreet,
			        streetNumber: WrongStreetNumber,
			        images: WrongImagesNumber,
                }
            }
        });
        expect(
            wrapper.get('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be disabled when wrong title', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: WrongTitle,
                    description: RightDescription,
			        cp: RightCP,
			        street: RightStreet,
			        streetNumber: RightStreetNumber,
			        images: RightImagesNumber,
                }
            }
        });
        expect(
            wrapper.get('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    })

    it('should be disabled when wrong description', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: RightTitle,
                    description: WrongDescription,
			        cp: RightCP,
			        street: RightStreet,
			        streetNumber: RightStreetNumber,
			        images: RightImagesNumber,
                }
            }
        });
        expect(
            wrapper.find('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be disabled when wrong CP', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: RightTitle,
                    description: RightDescription,
			        cp: WrongCP2,
			        street: RightStreet,
			        streetNumber: RightStreetNumber,
			        images: RightImagesNumber,
                }
            }
        });
        expect(
            wrapper.find('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be disabled when wrong street', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: RightTitle,
                    description: RightDescription,
			        cp: RightCP,
			        street: WrongStreet,
			        streetNumber: RightStreetNumber,
			        images: RightImagesNumber,
                }
            }
        });
        expect(
            wrapper.find('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be disabled when wrong street number', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: RightTitle,
                    description: RightDescription,
			        cp: RightCP,
			        street: RightStreet,
			        streetNumber: WrongStreetNumber2,
			        images: RightImagesNumber,
                }
            }
        });
        expect(
            wrapper.find('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });

    it('should be disabled when wrong images amount', () =>{
        const wrapper = shallowMount(CreateTicket,{
            data() {
                return {
                    title: RightTitle,
                    description: RightDescription,
			        cp: RightCP,
			        street: RightStreet,
			        streetNumber: RightStreetNumber,
			        images: WrongImagesNumber,
                }
            }
        });
        expect(
            wrapper.find('b-button-stub').attributes('disabled')
        ).toBeTruthy();
    });
})