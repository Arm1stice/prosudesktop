import {app, autoUpdater} from 'electron'
var config = require("../config")
autoUpdater.setFeedURL(`${config.updateServer}/update/${process.platform}/${app.getVersion()}`)
module.exports = autoUpdater;
