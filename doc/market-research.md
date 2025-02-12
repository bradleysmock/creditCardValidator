# Market Research on Credit Card Validation

## Context

Our company currently accepts credit card payments from Visa, MasterCard, and Discover.
We need a way to determine if a credit card is valid and to determine its type prior
processing.

## Stated Requirements

A credit card number is valid for a company if it...

- Visa - ... is 13 or 16 digits in length and starts with 4
- MasterCard - ... is 16 digits in length and starts with 51, 52, 53, 54, or 55
- Discover - ... is 16 digits in length and starts with 6011 or 65

### Known Limitations

- Not all credit card number strategies for the above companies are yet represented. 
See Credit Card Company-Specific Card Number Requirements
- Not all credit card companies need be supported at this time, including American Express.
These are good areas for future expansion.

## Assumptions

- The validation should be available by API endpoint, so it is accessible to UIs and other 
company internal applications.
- Development of the consuming application or UI is outside the scope of this current work.
- 

## General Strategies for Validation

Most companies use Luhn's Algorithm to internally validate card numbers without 
requiring anything external to the number itself. The algorithm is widely known 
as it is in standard use by all major credit card companies.

## Credit Card Company-Specific Card Number Requirements

Info aggregated from various online sources.

*Visa*
- Starts with 4
- Length: 13-16 digits (with 16 being most common)

*Mastercard*
- Starts with 51-55
- Length: 16 digits

*American Express*
- Starts with 34 or 37
- Length: 15 digits

*Discover*
- Starts with 6011, 622126-622925, 644-649, or 65
- Length: 16 digits

*Diners Club*
- International: Starts with 36
- US and Canada: Starts with 54 or 55
- Length: 14 digits (International), 16 digits (US and Canada)

*JCB*
- Starts with 3528-3589
- Length: 16 digits

*Maestro*
- Starts with 5018, 5020, 5038, 6304, 6759, 6761, 6762, or 6763
- Length: 12-19 digits

## Approaches

### Custom Implementation

| Advantages                                           | Disadvantages                                        |
|------------------------------------------------------|------------------------------------------------------|
| Most customizable in technology choices and features | Longer implementation time than a SaaS solution      |
| Control over process and technology end to end       | Maintenance costs and resources required             |
| Can grow with the company needs                      | Responsible for security governance and remediation  |
| -                                                    | In-house expertise required for robust solution      |

### SaaS-Solution

Multiple vendors provide credit card payment and validation services. Validation 
can be done via API-requests or full BaaS (Banking as a Service).

Some popular vendors include Stripe, Klarna, Amazon Pay, and Apple Pay.

| Advantages                                                    | Disadvantages                                   |
|---------------------------------------------------------------|-------------------------------------------------|
| Faster implementation time than a custom solution             | Possible vendor lock-in                         |
| Security updates and maintenance minimized to version updates | Black box if not open source                    | 
| Validation complexities and changes off-loaded to specialists | Additional cost for vendor                      |
| Validation integrated with payment system                     | External integration and networking requirement |
| May offer additional services for future growth               | -                                               |

## Recommendation

Unless our company specializes in credit card processing, the recommendation is to adopt a SaaS service that offers 
expert validation and processing.


## References

1. https://www.dcode.fr/luhn-algorithm?__r=1.700e003acb45cf7ab0c0126c88367f26
2. https://stripe.com/
3. https://stripe.com/resources/more/how-to-validate-cards-in-real-time

