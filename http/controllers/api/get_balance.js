const balance = require(__dirname+'/../../../ripple/get_account_balance.js');

module.exports = function(request, response){
  balance.getAccountBalance(request.query.ripple_address, function(error, balance){
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
          balance: balance
        });
    }
  });
};
