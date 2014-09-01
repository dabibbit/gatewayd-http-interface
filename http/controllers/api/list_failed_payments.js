const gateway = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  gateway.api.listFailedPayments(function(error, payments){
    if (error){
      response
        status(500)
        .send({
          success: false,
          error: error
        }); 
    } else {
      response
        .status(200)
        .send({
          success: true,
          payments: payments
        }); 
    }
  });
};

