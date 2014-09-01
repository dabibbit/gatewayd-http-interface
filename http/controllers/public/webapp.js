var gatewayd = require(process.env.GATEWAYD_PATH);
var fs = require('fs');

module.exports = function(req, res) {
  var filePath = gatewayd.config.get('WEBAPP_PATH')+'/app.html';
  fs.readFile(filePath, 'utf8', function(err, text){
    res.send(text);
  });
};
