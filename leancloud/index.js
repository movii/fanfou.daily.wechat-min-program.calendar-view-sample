const CONFIG = require('../config/index'); 

class LeanCloud {
  constructor () {
    this.AV = require('../utils/av-weapp-min');
    this.AV.init({
      appId: CONFIG.APP_ID, 
      appKey: CONFIG.APP_KEY 
    });
  }
}

module.exports = new LeanCloud();