const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  response
    .status(200)
    .send({
      success: true,
      'RIPPLE_REST_API': gatewayd.config.get('RIPPLE_REST_API') 
    });
};
