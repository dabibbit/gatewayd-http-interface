const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response) {
  gatewayd.api.clearWithdrawal(request.params.id, function(error, withdrawal){
    if (error) {
      if (error.id === 'record not found'){
        response
          .status(404)
          .send({
            success: false,
            error: {
              field: 'id',
              message: 'withdrawal not found'
            }
          });
      } else {
        response
          .status(500)
          .send({
            success: false,
            error: error
          });
      }
    } else {
      response
        .status(200)
        .send({
          success: true,
          withdrawal: withdrawal
        });
    }
  });
};

