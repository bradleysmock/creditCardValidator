import {LuhnsAlgorithm} from "./luhnsAlgorithm";

export abstract class CardValidator {

    static cardTypeName: string;

    /**
     * Use company-specific criteria and length to determine if a credit card number is valid.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card meets company-specific criteria
     */
    static isValidFormat: (cardNumber: number) => boolean;

    /**
     * Use Luhn's algorithm to determine if a number is a theoretically valid credit card number.
     * Does NOT validate length or company-specific criteria.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card number passes Luhn's algorithm verification
     */
    static isValidCreditCardNumber: (cardNumber: number) => boolean = (cardNumber: number): boolean => {
        return LuhnsAlgorithm.validate(cardNumber);
    };

}