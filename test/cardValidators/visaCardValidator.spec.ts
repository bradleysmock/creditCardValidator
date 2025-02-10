import {VisaCardValidator} from "../../src/cardValidators/visaCardValidator";

describe('Card Validator', () => {

    test.each([
        ['valid first of 4, invalid length short', 4, false],
        ['valid first of 4, invalid length long', 412345678901234530, false], // pressing close on bigint
        ['valid first of 4, valid length of 16', 4123456789012345, true],
        ['valid first of 4, valid length of 13', 4123456789012, true],
    ])('isVisa %s', (testName, input, expected) => {
        expect(VisaCardValidator.isValidFormat(input)).toBe(expected);
    });

});