# Summary

You work for a company that accepts Visa, MasterCard and Discover credit cards for payment.
Given a credit card number as input, answer the following questions:

- Is the input a valid credit card number?
- What type of credit card is this? (Visa, Mastercard or Discover)

Your application will be deployed in AWS and should be implemented using serverless architecture and services if possible.

## Deliverables

- A link to a URL where the functional solution can be demonstrated or downloaded
- A link (and credentials, if applicable) to a source control repository containing the source
code of the solution
- Documentation of any assumptions that were made in order to deliver the solution
- It is okay to include the documentation of assumptions in the source code repository or as a separate deliverable.

## How To Run Locally

1. Clone the repository from Github to a local folder.
2. Run `npm install` inside the local folder.
3. With a properly configured AWS CLI,
4. ... run `sam-build` from the command line
5. ... run `sam-start` from the command line
6. Use a REST client, like Insomnia or Postman, to make requests to `http://localhost:3000/number` with a payload as follows:

```
{
"numberToValidate": 4123456789012345
}
```

## Additional Information

We do not expect any more than a few hours of effort for this, but you may put as much or as little time into the project as you would like. Anything that you would like to do, but does not fit in this time should be documented in the assumptions document deliverable.

Each credit card company uses a different number format for their credit cards.

- Visa - 13 or 16 digits, starting with 4
- MasterCard - 16 digits, starting with 51 through 55
- Discover - 16 digits, starting with 6011 or 65
