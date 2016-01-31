var fs = require('fs');
var request = require('request');

var config = require('../config/telegram');

module.exports = {
	sendMessage: function(chatId, text, cb){
		var options = {
		  url: 'https://api.telegram.org/bot' + config.token + '/sendMessage',
		  form: {
		  	chat_id: chatId,
		  	text: text
		  },
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		  }
		};
		return request.post(options, cb);

	},
	sendPhoto: function(chatId, caption, filePath, cb){
		var formData = {
		  chat_id: chatId,
		  caption: caption,
		  photo: fs.createReadStream(filePath),
		};
		var options = {
		  url: 'https://api.telegram.org/bot' + config.token + '/sendPhoto',
		  formData: formData,
		  headers: {
		    'Content-Type': 'multipart/form-data'
		  }
		};
		return request.post(options, cb);
	}
}