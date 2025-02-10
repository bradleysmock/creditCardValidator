export class LuhnsAlgorithm {
    /**
     * Luhn's algorithm is often used to validate the internal integrity of credit card numbers
     * using a control key that must match the sum of the other digits, with every other digit doubled
     * (replacing the doubled digit by the sum of its digits if over 10 after doubling).
     *
     * The control key is calculated with this formula: c = (10 − (s mod 10) ) mod 10, where c is
     * the control key and s is the calculated sum of the other digits, including doubling as described above.
     *
     * Extrapolating from this algorithm gives isValid = s mod 10 === 0, where s is the calculated sum of
     * the digits, including doubling as described above.
     *
     */

    /**
     * Double a number. If the double is above ten, return the sum of the digits instead.
     * @param number
     * @private
     */
    private static doubleNumberAndSumDigitsAboveTen(number: number): number {
        const doubled = number * 2;
        return doubled > 9 // if 10 or over
            ? doubled - 9  // sum digits, effectively 1 + secondDigit
            : doubled;
    }

    /**
     * Validate a number using Luhn's algorithm
     * @param numberToValidate {number} the number to validate
     * @returns {boolean} whether the number passes validation
     */
    static validate(numberToValidate: number): boolean {
        return numberToValidate.toString().split('')
            .map(x => parseInt(x))
            .reduceRight((sum, currentNumber, index, initialArray) => {
                return (initialArray.length - index) % 2 === 0 // double every other number
                    ? sum + LuhnsAlgorithm.doubleNumberAndSumDigitsAboveTen(currentNumber)
                    : sum + currentNumber;
            }, 0) % 10 === 0;
    }
}

