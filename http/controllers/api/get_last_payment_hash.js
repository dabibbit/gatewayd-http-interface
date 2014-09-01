const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  response.send({
    success: true,
    'LAST_PAYMENT_HASH': gatewayd.config.get('LAST_PAYMENT_HASH')
  });
};
