import {CardValidator} from "../../src/cardValidators/cardValidator";

describe('Card Validator', () => {

    test.each([
        ['valid number 1', 4417123456789113, true],
        ['valid number 2', 4941383040015327, true],
        ['valid number 3', 1268053963437, true],
        ['valid number 4', 5625887134624, true],
        ['invalid number 1', 4417123456789119, false],
        ['invalid number 2', 4417123456789114, false],
        ['invalid number 3', 5625887134628, false],
    ])('is a credit card number: %s', (testName, input, expected) => {
        expect(CardValidator.isValidCreditCardNumber(input)).toBe(expected);
    });

});