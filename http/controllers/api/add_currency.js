const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  gatewayd.api.addCurrency(request.body.currency, function(error, currencies){
    if (error){
      response
        .status(500)
        .send({
          success: false,
          error: error
        });
    } else {
      response
        .status(200)
        .send({
          success: true,
          currencies: currencies
        });
    }
  });
};
