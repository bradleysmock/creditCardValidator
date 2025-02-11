import {VisaCardValidator} from "./visaCardValidator";
import {DiscoverCardValidator} from "./discoverCardValidator";
import {MastercardCardValidator} from "./mastercardCardValidator";
import {AmericanExpressCardValidator} from "./americanExpressCardValidator";
import {NullCardValidator} from "./nullCardValidator";
import {CardValidator} from "./cardValidator";

export class CardTypeFinder {

    private static cardTypes: any[] = [
        VisaCardValidator,
        MastercardCardValidator,
        DiscoverCardValidator,
        AmericanExpressCardValidator,
        NullCardValidator,
        ];

    static findType(numberToType: number): string {
        // TODO
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

        // const found = this.cardTypes
        //     .find(cardType => cardType.isValidFormat(numberToType))
        // ?? NullCardValidator;
        //
        // return found.cardTypeName;
    }

}

