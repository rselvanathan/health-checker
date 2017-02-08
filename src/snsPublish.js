var AWS = require('aws-sdk');
var sns = new AWS.SNS(
	{
		accessKeyId : process.env.AWS_ACCESS_KEY,
		secretAccessKey : process.env.AWS_SECRET_KEY,
		region : process.env.AWS_REGION
	}
);

var snsPublish  =  function publishErrorMessage() {
	var params = {
		Message : 'The RomCharm REST service is down.',
		TopicArn : process.env.SNS_TOPIC,
		Subject : "RomCharm REST Down!"
	};
	sns.publish(params, function (err, data) {
		if(err)	console.log(err, err.stack);
	});
};

module.exports = snsPublish;