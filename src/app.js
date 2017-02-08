var request = require('request');
var snsPublish = require('./snsPublish');

function main() {
	request(process.env.REST_HEALTH_ENDPOINT, function (error) {
		if (error) {
			snsPublish();
			console.log("Rest Service Down");
		} else
			console.log("Rest Service Up");
	});
}

// Repeat the health check at a set interval
setInterval(main, parseInt(process.env.INTERVAL_MINUTES)*60*1000);
