/**
 *
 * Visa - 13 or 16 digits, starting with 4
 * MasterCard - 16 digits, starting with 51 through 55
 * Discover - 16 digits, starting with 6011 or 65
 * Amex - 15 digits, 34 or 37
 *
 * Notes:
 * At 16 chars we're pressing the limits of the number type. All valid values are less than Number.MAX_SAFE_INTEGER,
 * but some test values are beyond.
**/
