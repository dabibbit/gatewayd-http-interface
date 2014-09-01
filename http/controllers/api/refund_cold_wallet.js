const gatewayd = require(process.env.GATEWAYD_PATH);

module.exports = function(request, response){
  var currency = req.body.currency;
  var amount = req.body.amount;
  gatewayd.api.refundColdWallet(currency, amount,function(err, resp){
    if (err) {
      res.send(500, { error: err });  
    } else {
      res.send({ ripple_transaction: resp });
    }
  });  
};
