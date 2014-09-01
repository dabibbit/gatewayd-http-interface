const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response) {
  var options =  {
    external_account_id: req.body.external_account_id,
    amount: req.body.amount,
    currency: req.body.currency,
    data: req.body.data
  };

  if (options.external_account_id && options.amount && options.currency) {

    gatewayd.api.recordDeposit(options, function(error, deposit){
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
          deposit: deposit
        });
      }
    });
  
  } else {
    response
      .status(500)
      .send({
        success: false,
        required: [
          'external_account_id', 
          'amount', 
          'currency'
        ]
      });
  }
};

