const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response) {
  var options = {
    amount: req.body.amount,
    currency: req.body.currency,
    secret: req.body.secret
  };
  gatewayd.api.fundHotWallet(options, function(error, hotWallet){
    if (error) {
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
          hot_wallet: hotWallet
        });
    }
  });
};

