var gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  response
    .status(200)
    .send({
      success: true,
      DATABASE_URL: gatewayd.config.get('DATABASE_URL')
    });
};

