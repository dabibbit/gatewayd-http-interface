const listTrustlines = require(__dirname+'/../../../ripple/lines.js');
const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  var account = req.params.account;
  if (!gatewayd.validator.isRippleAddress(account)) {
    return response
      .status(500)
      .send({
        success: false,
        error: { account: 'invalid ripple address' }
      });
  }
  var trustOptions = {
    toAccount: gatewayd.config.get('COLD_WALLET'),
    fromAccount: account
  };
  listTrustlines(trustOptions, function(error, trustlines){
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
          trustlines: trustlines
        });
    }
  });
};
