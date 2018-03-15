var config;
if(process.argv[0] == "Prosu.exe"){
  config = require('./stable')
}else{
  config = require('./beta')
}
module.exports = config;
