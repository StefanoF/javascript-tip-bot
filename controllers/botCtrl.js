var telegramService = require('../services/telegramService');
var tipService = require('../services/tipService');

module.exports = {
  start: function(req, res){
  	var chatId = req.body.message.chat.id
		var text = 'Welcome! Type /giveme to see a useful javascript programming tip (ES5)';

		telegramService.sendMessage(chatId, text, function(err, response, body){
			if(err)
				return res.status(500).json({
		      test: err,
					success: false,
		      error: 'Error on sendMessage to telegram'
		    });

			return res.json({
	      success: true,
	      error: null
	    });
		});

  },
  giveme: function(req, res){
  	var chatId = req.body.message.chat.id
		var tip = tipService.getRandom();
		var filePath = './' + tip.basePath + tip.img;

		telegramService.sendPhoto(chatId, tip.msg, filePath, function(err, response, body){
			if(err)
				return res.status(500).json({
		      test: err,
					success: false,
		      error: 'Error on sendPhoto to telegram'
		    });

			return res.json({
	      success: true,
	      error: null
	    });
	  });

  },
  commandNotFound: function(req, res){
  	var chatId = req.body.message.chat.id
		var text = 'Command not found';

		telegramService.sendMessage(chatId, text, function(err, response, body){
			if(err)
				return res.status(500).json({
		      test: err,
					success: false,
		      error: 'Error on sendMessage to telegram'
		    });

			return res.json({
	      success: true,
	      error: null
	    });
		});
		
  }
};