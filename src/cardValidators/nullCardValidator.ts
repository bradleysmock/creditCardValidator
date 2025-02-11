import {CardValidator} from "./cardValidator";

export class NullCardValidator implements CardValidator {

    static cardTypeName: string = 'None';

    static isValidFormat(cardNumber: number) {
        return true;
    }

}