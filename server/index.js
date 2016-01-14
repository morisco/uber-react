var path = require('path'),
	express = require('express'),
	app = express(),
	routes = require('./routes')(app);

app.use(express.static(path.join(__dirname, '../')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000! do it');
});