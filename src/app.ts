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
    try {
        console.log(event.path);
        switch(event.path) {
            case '/health':
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'lambda handler active',
                    }),
                };
            case '/number':
                const {numberToValidate}: { numberToValidate: number } = JSON.parse(event.body ?? '');
                const isValidCreditCardNumber = CardValidator.isValidCreditCardNumber(numberToValidate);
                const cardType = CardTypeFinder.findType(numberToValidate);
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        requestId: 'random',
                        isValidCreditCardNumber,
                        cardType,
                        message: 'success',
                    }),
                };
            default:
                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        message: 'Not found' + event.path,
                    }),
                };
        }
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
