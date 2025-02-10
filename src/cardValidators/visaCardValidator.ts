import {CardValidator} from "./cardValidator";

export class VisaCardValidator implements CardValidator {

    private static readonly validRanges = {
        "13": { minValue: 4000000000000, maxValue: 4999999999999 },
        "16": { minValue: 4000000000000000, maxValue: 4999999999999999 },
    }

    static isValidFormat(cardNumber: number) {
        return (cardNumber >= this.validRanges["13"].minValue && cardNumber <= this.validRanges["13"].maxValue)
            || (cardNumber >= this.validRanges["16"].minValue && cardNumber <= this.validRanges["16"].maxValue);
    }

}