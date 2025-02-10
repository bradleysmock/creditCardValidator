import {MastercardCardValidator} from "../../src/cardValidators/mastercardCardValidator";

describe('Mastercard Card Validator', () => {

    test.each([
        ['valid first of 51, invalid length short', 51, false],
        ['valid first of 55, invalid length short', 55, false],
        ['valid first of 51, invalid length long', 51234567890123450, false], // bigint!
        ['invalid first of 50, valid length', 5099999999999999, false],
        ['invalid first of 56, valid length', 5600000000000000, false],
        ['valid first of 51, valid length', 5123456789012345, true],
        ['valid first of 55, valid length', 5523456789012345, true],
        ['valid first of 51, valid length, min value', 5100000000000000, true],
        ['valid first of 51, valid length, max value', 5199999999999999, true],
        ['valid first of 55, valid length, min value', 5500000000000000, true],
        ['valid first of 55, valid length, max value', 5599999999999999, true],
    ])('isMasterCard %s', (testName, input, expected) => {
        expect(MastercardCardValidator.isValidFormat(input)).toBe(expected);
    });

});