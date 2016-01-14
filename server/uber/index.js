var Uber = require('node-uber');

var uber = new Uber({
  client_id: '*******',
  client_secret: '*******',
  server_token: '*******',
  redirect_uri: '*******',
  name: '*******',
});

module.exports = {
  getProducts: function(location, cb) {
  	var product_list = uber.products.list({ latitude: location.lat, longitude: location.lng }, function (err, res) {
      if (err)
        cb.fail(err);
      else
        cb.success(res);
  	});
    return product_list;
  },
       
  sayHelloInSpanish: function() {
    return "Hola";
  }
};

return module.exports;
