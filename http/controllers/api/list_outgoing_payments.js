const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response) {
  gatewayd.api.listOutgoingPayments(function(error, payments){
    if (error) {
      response
        .status(500)
        .send({
          success: false,
          error: error
        });
    } else {
      response.send({
        success: true,
        payments: payments
      });
    }
  });
  
};

