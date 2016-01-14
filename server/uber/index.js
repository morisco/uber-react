var Uber = require('node-uber');

var uber = new Uber({
  client_id: 'MLtQTh5LrxlFRb6-R-i8ck7y6bsODfnT',
  client_secret: 'dINPqb9Xy-y86bRDYnsikxYLmWC7UVcw4UE72GWU',
  server_token: '5jKc-uxfLRGpa27CWxucHfZTxG4Cue6cjZNShhVh',
  redirect_uri: 'https://ubermebro.com',
  name: 'Do_It_Bro!'
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