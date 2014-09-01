const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response) {
  gatewayd.api.deactivateUser(request.params.id, function(error, user){
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
          user: user
        });
    }
  });
};

