# Credit Card Validator Architecture

## Components

1. UI - Not built

    The UI provides a nice visual user interface to future customers. *FUTURE - This is assumed to be out of the current scope.*

2. API Gateway - Not built

    The API Gateway provides a layer of protection above the lambda and is where authentication, rate limiting, and other
    safety mechanisms should be added.  *FUTURE - This is assumed to be out of the current scope.*

3. Lambda Function

    AWS lambda functions provide clean serverless functionality in cases that don't require long processing. AWS's SAM 
    framework is ideal for lambda development and deployment.

    Additional functionality can be added by adding additional lambdas. If more processing is required, a containerized
    application, deployed either through Fargate or EKS, can be considered.

## Limitations and Concessions

1. Authentication - The current implementation is overly generous. It will require an authentication layer matching security
requirements prior to a production deployment. Oauth2 based on a user JWT is recommended from the UI. An API key approach
can be used for internal integrations if needed, although an Oauth2 service token is preferable.
