const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  response
    .status(200)
    .send({
      success: true,
      DOMAIN: gatewayd.config.get('DOMAIN')
    });
};

