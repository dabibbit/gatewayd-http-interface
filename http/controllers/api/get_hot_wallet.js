var gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  var hotWallet = gatewayd.config.get('HOT_WALLET') || {};
  response
    .status(200)
    .send({
      success: true,
      'HOT_WALLET': {
        address: hotWallet.address
      }
    });
};

