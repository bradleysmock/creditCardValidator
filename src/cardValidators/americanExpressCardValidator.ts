import {CardValidator} from "./cardValidator";

export class AmericanExpressCardValidator implements CardValidator {

    static cardTypeName: string = 'American Express';

    static isValidFormat(cardNumber: number) {
        // TODO
        return false;
    }

}