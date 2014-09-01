const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response) {
  gateway.api.listUserExternalAccounts(request.params.id, function(error, accounts){
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
          external_accounts: accounts
        });
    }
  });
};

