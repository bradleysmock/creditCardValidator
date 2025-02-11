import {CardValidator} from "./cardValidator";

export class MastercardCardValidator implements CardValidator {

    static cardTypeName: string = 'MasterCard';

    static isValidFormat(cardNumber: number) {
        return (cardNumber >= 5100000000000000 && cardNumber < 5600000000000000);
    }

}