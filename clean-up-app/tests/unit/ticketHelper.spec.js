import { invalidTextSize } from '@/helpers/ticketHelper';

describe('tickethelper works properly', () => {
    
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
        RightStreetNumber = 500;

        it('should be true when wrong parameters', () =>{
            expect(
                invalidTextSize(WrongTitle, WrongDescription, WrongCP, WrongStreetNumber, WrongStreet) 
            ).toBeTruthy();
        });

        it('should be true when wrong tittle', () =>{
            expect(
                invalidTextSize(WrongTitle, RightDescription, RightCP, RightStreetNumber, RightStreet) 
            ).toBeTruthy();
        });

        it('should be true when wrong description', () =>{
            expect(
                invalidTextSize(RightTitle, WrongDescription, RightCP, RightStreetNumber, RightStreet) 
            ).toBeTruthy();
        });

        it('should be true when wrong CP', () =>{
            expect(
                invalidTextSize(RightTitle, RightDescription, WrongCP2, RightStreetNumber, RightStreet) 
            ).toBeTruthy();
        });

        it('should be true when wrong street number', () =>{
            expect(
                invalidTextSize(RightTitle, RightDescription, RightCP, WrongStreetNumber2, RightStreet) 
            ).toBeTruthy();
        });

        it('should be true when wrong street', () =>{
            expect(
                invalidTextSize(RightTitle, RightDescription, RightCP, RightStreetNumber, WrongStreet) 
            ).toBeTruthy();
        });

        it('should be false when right parameters ', () =>{
            expect(
                invalidTextSize(RightTitle, RightDescription, RightCP, RightStreetNumber , RightStreet) 
            ).toBeFalsy();
        });
})