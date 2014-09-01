var gatewayd = require(process.env.GATEWAYD_PATH);

function userIsAuthorized(req){
  if (req.user.admin){
    return true;
  } else {
    if (parseInt(req.params.id) === parseInt(req.user.id)) { 
      return true;
    } else {
      return false;
    }
  }
}

function externalAccounts (req, res) {
  if (!userIsAuthorized(req)) { res.send(401); return; }

  gatewayd.data.externalAccounts.readAll({ user_id: req.params.id }, function(err, accounts) {
    if (err) { res.send(500, { error: err }); return; }
    res.send({ externalAccounts: accounts });
  });
}

function externalTransactions(req, res) {
  if (!userIsAuthorized(req)) { res.send(401); return; }

  gatewayd.data.externalTransactions.forUser(req.params.id, function(err, transactions) {
    if (err) {
      res.send(500, { error: err });
    } else {
      res.send({ externalTransactions: transactions });
    }
  });
}

function rippleAddresses(req, res) {
  if (!userIsAuthorized(req)) { res.send(401); return; }

  gatewayd.data.rippleAddresses.readAll({ user_id: req.params.id }, function(err, addresses) {
    if (err) { res.send(500, { error: err }); return; }
    res.send({ rippleAddresses: addresses });
  });

}

function rippleTransactions(req, res) {
  if (!userIsAuthorized(req)) { res.send(401); return; }

  gatewayd.data.rippleTransactions.forUser(req.params.id, function(err, rippleTransactions) {
    if (err) { res.send(500, { error: err }); return; }
    res.send(200, { rippleTransactions: rippleTransactions });
  });

}

function show(req, res) {
  if (!userIsAuthorized(req)) { res.send(401); return; }

  gatewayd.data.users.read({ id: req.params.id }, function(err, user){
    if (err) { res.send(500, { error: err }); return; }
    res.send(200, { user: user });
  });
  
}

var controller = {
  externalAccounts: externalAccounts,
  externalTransactions: externalTransactions,
  rippleAddresses: rippleAddresses,
  rippleTransactions: rippleTransactions,
  show: show
};

module.exports = controller;
