const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  gatewayd.api.listIncomingPayments(function(error, payments){
    if (error) {
      res
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
          incoming_payments: payments
        });
    }
  });
};

