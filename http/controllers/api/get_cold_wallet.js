const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  var coldWallet = gatewayd.config.get('COLD_WALLET') || {};
  response
    .status(200)
    .send({
      success: true,
      'COLD_WALLET': {
        address: coldWallet
      }
    });
};

