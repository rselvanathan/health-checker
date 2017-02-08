## REST Service Health Checker

A small NodeJS application that will check the health of a REST service continuously at a set interval. If the service is down an
e-mail message to a SNS topic is sent. This SNS topic can then be subscribed to by multiple or one e-mail address.

Tech Used : AWS SNS, Docker, NodeJS

##### Project Usage

The application can be run natively with the following commands :

```bash
node ./src/app.js
```

or with the pre-defined npm command :

```bash
npm start
```

Before running the application please ensure the following environment variables have been set :
```bash
AWS_ACCESS_KEY - 		The AWS Accesss Key
AWS_SECRET_KEY - 		The AWS Secret Key
AWS_REGION - 			The Region of the SNS topic
SNS_TOPIC - 			The SNS Topic ARN
REST_HEALTH_ENDPOINT -  The full HTTP/HTTPS endpoint of the health API to check against. Expected response code is a 200.
INTERVAL_MINUTES - 		The Interval defined in minutes.
```

##### Docker Usage

The project can be built and run as a docker container.

Simply build the project as :

```bash
docker build -t NAME-OF-IMAGE .
```

And then to run the image : 
```bash
docker run -d --name health-checker \
-e AWS_ACCESS_KEY= \ 
-e AWS_SECRET_KEY= \
-e AWS_REGION= \
-e SNS_TOPIC= \
-e REST_HEALTH_ENDPOINT= \
-it NAME-OF-IMAGE:latest
```

###### Author
Romesh Selvanathan