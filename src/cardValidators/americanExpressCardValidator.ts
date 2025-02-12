import {CardValidator} from "./cardValidator";

export class AmericanExpressCardValidator implements CardValidator {

    static cardTypeName: string = 'American Express';

    /**
     * Use American Express-specific criteria and length to determine if a credit card number is valid.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card meets company-specific criteria
     */
    static isValidFormat(cardNumber: number): boolean {
        /**
         * I added this as an example stub for a likely future extension.
         * Any other accepted card types would require a new file like this with the format logic added.
         * This is however outside the current scope.
         */

        // TODO Add format logic to complete
        return false;
    }

}