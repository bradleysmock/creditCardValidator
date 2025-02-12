import {CardValidator} from "./cardValidator";

export class NullCardValidator implements CardValidator {

    /**
     * This file follows a null handling pattern by providing a stub class that matches on null cases.
     * The approach allows for more graceful handling of nulls, on our case allowing
     * the string "None" to be returned instead of a null in the cardTypeFinder.
     */

    static cardTypeName: string = 'None';

    /**
     * Use company-specific criteria and length to determine if a credit card number is valid.
     * NOTE: the NullCardValidator always returns true and should be used as a fallback only.
     * Although this is currently unused, I've left to show the full pattern.
     * @param cardNumber {number} credit card number as number without any spaces or dashes
     * @returns {boolean} whether the credit card meets company-specific criteria
     */
    static isValidFormat(cardNumber: number) {
        return true;
    }

}