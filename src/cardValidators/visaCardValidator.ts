import {CardValidator} from "./cardValidator";

export class VisaCardValidator implements CardValidator {

    static cardTypeName: string = 'Visa';

    private static readonly validRanges = {
        "13": { minValue: 4000000000000, maxValue: 4999999999999 },
        "16": { minValue: 4000000000000000, maxValue: 4999999999999999 },
    }

    /**
     * Use Visa-specific criteria and length to determine if a credit card number is valid.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card meets company-specific criteria
     */
    static isValidFormat(cardNumber: number) {
        return (cardNumber >= this.validRanges["13"].minValue && cardNumber <= this.validRanges["13"].maxValue)
            || (cardNumber >= this.validRanges["16"].minValue && cardNumber <= this.validRanges["16"].maxValue);
    }

}