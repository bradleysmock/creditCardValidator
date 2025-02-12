import {CardValidator} from "./cardValidator";

export class DiscoverCardValidator implements CardValidator {

    static cardTypeName: string = 'Discover';

    private static readonly validRanges = {
        "6011": { minValue: 6011000000000000, maxValue: 6011999999999999 },
        "65": { minValue: 6500000000000000, maxValue: 6599999999999999 },
    }

    /**
     * Use Discover-specific criteria and length to determine if a credit card number is valid.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card meets company-specific criteria
     */
    static isValidFormat(cardNumber: number) {
        return (cardNumber >= this.validRanges["6011"].minValue && cardNumber <= this.validRanges["6011"].maxValue)
            || (cardNumber >= this.validRanges["65"].minValue && cardNumber <= this.validRanges["65"].maxValue);
    }

}