import {DiscoverCardValidator} from "../../src/cardValidators/discoverCardValidator";

describe('Discover Card Validator', () => {

    test.each([
        ['valid first, invalid length', 6011, false],
        ['valid first, invalid length', 65, false],
        ['valid first, valid length', 6011456789012345, true],
        ['valid first, valid length', 6511456789012345, true],
        ['invalid first, valid length', 6111456789012345, false],
        ['invalid first, valid length', 5011456789012345, false],
        ['valid first, valid length', 6600000789012345, false],
    ])('isDiscover %s', (testName, input, expected) => {
        expect(DiscoverCardValidator.isValidFormat(input)).toBe(expected);
    });

});