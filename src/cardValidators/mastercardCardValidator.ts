import {CardValidator} from "./cardValidator";

export class MastercardCardValidator implements CardValidator {

    static cardTypeName: string = 'MasterCard';

    /**
     * Use Mastercard-specific criteria and length to determine if a credit card number is valid.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card meets company-specific criteria
     */
    static isValidFormat(cardNumber: number): boolean {
        return (cardNumber >= 5100000000000000 && cardNumber < 5600000000000000);
    }

}