var path = require('path'),
	Promise = require('bluebird'),
	uber = require('../uber');

// uber.init();


module.exports = function(app){

  app.get('/', function (req, res) {
	  res.sendFile('comingsoon.html', { root: __dirname + '/../views' });
	});

	app.get('/app', function (req, res) {
	  res.sendFile('index.html', { root: __dirname + '/../views' });
	});

	app.post('/api/uber/products/:lat/:lng', function(req,res){
		uber.getProducts(req.params, {
			success: function(response) {
				res.json(response);
			}, 
			fail: function(err) {
				res.json(err);
			}
		});
	});

    //other routes..
}