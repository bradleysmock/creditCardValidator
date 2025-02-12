import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import {CardValidator} from "./cardValidators/cardValidator";
import {CardTypeFinder} from "./cardValidators/cardTypeFinder";

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    /**
     * I've added this as an example of adding traceability to requests. The randomNumber value should be replaced
     * with something like a ULID, which is orderable, allowing better matching of log statements to a single request
     * in a busy log file.
     */
    const requestId = 'randomNumber';

    try {
        switch(event.path) {
            /**
             * I've added a health endpoint for convenience while in the development stages of this project. It allows a
             * quick validation method to ensure the lambda is running and accessible. This would be removed prior to a
             * production deployment in a real engineering situation to reduce complexity and maintenance on the endpoint.
             */
            case '/health':
                console.debug(`Request ${requestId}: ${event.path}`);

                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'lambda handler active',
                    }),
                };
            case '/number':
                console.info(`Request ${requestId}: ${event.path}`);
                const {numberToValidate}: { numberToValidate: number } = JSON.parse(event.body ?? '');
                const isValidCreditCardNumber = CardValidator.isValidCreditCardNumber(numberToValidate);
                const cardType = CardTypeFinder.findType(numberToValidate);

                /**
                 * The response here is optimistic. A robust testing strategy would identify any possible errors
                 * and allow error-handling implementation to provide a smooth experience even if an error occurs.
                 */
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        requestId,
                        isValidCreditCardNumber,
                        cardType,
                        message: 'success',
                    }),
                };
            default:
                console.warn(`Request ${requestId}: Not found -- ${event.path}`);

                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        message: 'Not found'
                    }),
                };
        }
    } catch (error) {
        console.error(`Request ${requestId}: ${event.path} -- ERROR!`, error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'An unexpected error happened. Please try again later.',
            }),
        };
    }
};
