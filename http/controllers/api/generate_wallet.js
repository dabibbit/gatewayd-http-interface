const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  gatewayd.api.generateWallet(function(error, wallet){
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
          wallet: wallet
        });
    }
  });
};

