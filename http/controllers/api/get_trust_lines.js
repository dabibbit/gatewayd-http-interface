const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  gatewayd.api.getTrustLines(function(error, lines){
    if (error){
      response
        .status(500)
        .send({
          success: false,
          error: error 
        });
    } else {
      response.send({
        success: true,
        lines: lines
      });
    }
  });
};

