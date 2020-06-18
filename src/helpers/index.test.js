import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
	const secretWord = 'party';
	test('returns the correct count when there is no matching letter', () => {
		const letterMatchCount = getLetterMatchCount(secretWord, 'bones');
		expect(letterMatchCount).toBe(0);
	});
	test('returns the correct count when there are 3 matching letters', () => {
		const letterMatchCount = getLetterMatchCount(secretWord, 'train');
		expect(letterMatchCount).toBe(3);
	});
	test('returns the correct count when there are duplicate letters in the gues', () => {
		const letterMatchCount = getLetterMatchCount(secretWord, 'parka');
		expect(letterMatchCount).toBe(3);
	});
});
