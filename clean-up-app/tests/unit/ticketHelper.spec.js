import { invalidTextSize } from '@/helpers/ticketHelper';

describe('ticketHelper', () => {
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

	it('Devuelve true si los parámetros son inválidos', () => {
		expect(
			invalidTextSize(
				WrongTitle,
				WrongDescription,
				WrongCP,
				WrongStreetNumber,
				WrongStreet
			)
		).toBeTruthy();
	});

	it('Devuelve true si lel título es inválido', () => {
		expect(
			invalidTextSize(
				WrongTitle,
				RightDescription,
				RightCP,
				RightStreetNumber,
				RightStreet
			)
		).toBeTruthy();
	});

	it('Devuelve true si la descripción es inválida', () => {
		expect(
			invalidTextSize(
				RightTitle,
				WrongDescription,
				RightCP,
				RightStreetNumber,
				RightStreet
			)
		).toBeTruthy();
	});

	it('Devuelve true si el código postal es inválido', () => {
		expect(
			invalidTextSize(
				RightTitle,
				RightDescription,
				WrongCP,
				RightStreetNumber,
				RightStreet
			)
		).toBeTruthy();
		expect(
			invalidTextSize(
				RightTitle,
				RightDescription,
				WrongCP2,
				RightStreetNumber,
				RightStreet
			)
		).toBeTruthy();
	});

	it('Devuelve true si el número de calle es inválido', () => {
		expect(
			invalidTextSize(
				RightTitle,
				RightDescription,
				RightCP,
				WrongStreetNumber,
				RightStreet
			)
		).toBeTruthy();
		expect(
			invalidTextSize(
				RightTitle,
				RightDescription,
				RightCP,
				WrongStreetNumber2,
				RightStreet
			)
		).toBeTruthy();
	});

	it('Devuelve true si la calle es inválida', () => {
		expect(
			invalidTextSize(
				RightTitle,
				RightDescription,
				RightCP,
				RightStreetNumber,
				WrongStreet
			)
		).toBeTruthy();
	});

	it('Devuelve false si los parámetros son válidos', () => {
		expect(
			invalidTextSize(
				RightTitle,
				RightDescription,
				RightCP,
				RightStreetNumber,
				RightStreet
			)
		).toBeFalsy();
	});
});
