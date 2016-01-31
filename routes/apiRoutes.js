var botCtrl = require('../controllers/botCtrl');

module.exports = function(app) {
	
	app.post('/', function(req, res){
		if (req.body.message.text.lastIndexOf('/start', 0) === 0) {
			return botCtrl.start(req, res);

		}else if(req.body.message.text.lastIndexOf('/giveme', 0) === 0) {
			return botCtrl.giveme(req, res);

		}else{
			return botCtrl.commandNotFound(req, res);
		}
	});

};