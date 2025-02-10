import {CardValidator} from "./cardValidator";

export class DiscoverCardValidator implements CardValidator {

    static isValidFormat(cardNumber: number) {
        return (cardNumber >= 6011000000000000 && cardNumber < 6012000000000000)
            || (cardNumber >= 6500000000000000 && cardNumber < 6600000000000000);
    }

}