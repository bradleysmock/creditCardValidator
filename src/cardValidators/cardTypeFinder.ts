import {VisaCardValidator} from "./visaCardValidator";
import {DiscoverCardValidator} from "./discoverCardValidator";
import {MastercardCardValidator} from "./mastercardCardValidator";
import {AmericanExpressCardValidator} from "./americanExpressCardValidator";
import {NullCardValidator} from "./nullCardValidator";

export class CardTypeFinder {

    /**
     * Loops through the known card number formats to determine a number's card type.
     * Does not validate the number, only the format.
     * @param numberToType The number to find the card type of.
     * @returns The name of the matching card type. None if no match.
     */
    static findType(numberToType: number): string {
        /**
         * Note: This approach would be limiting with rapidly changing requirements as every
         * new card type would require being added here. The risk is acceptable with the known
         * stability of card types for this project.
         */

        if (VisaCardValidator.isValidFormat(numberToType)) {
            return VisaCardValidator.cardTypeName;
        } else if (MastercardCardValidator.isValidFormat(numberToType)) {
            return MastercardCardValidator.cardTypeName;
        } else if (DiscoverCardValidator.isValidFormat(numberToType)) {
            return DiscoverCardValidator.cardTypeName;
        } else if (AmericanExpressCardValidator.isValidFormat(numberToType)) {
            return AmericanExpressCardValidator.cardTypeName;
        } else {
            return NullCardValidator.cardTypeName;
        }

    }

}

