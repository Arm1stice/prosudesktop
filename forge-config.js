require('dotenv').config()
let path = require('path')
module.exports = {
  make_targets: {
    win32: [
      "squirrel"
    ]
  },
  electronPackagerConfig: {
    packageManager: "yarn",
    protocol: "prosu://",
    appCopyright: "Copyright (c) 2018 Wyatt Calandro",
    asar: false,
    name: (Boolean(process.env.BETA)) ? "ProsuBeta" : "Prosu",
    executableName: (Boolean(process.env.BETA)) ? "Prosu Beta" : "Prosu",
    icon: path.join(__dirname, "icons/desktop_icon.ico")
  },
  electronWinstallerConfig: {
    "exe": (Boolean(process.env.BETA)) ? "Prosu Beta.exe" : "Prosu.exe",
    "description": "Backup your osu! beatmaps",
    "title": (Boolean(process.env.BETA)) ? "ProsuBeta" : "Prosu",
    "setupExe": (Boolean(process.env.BETA)) ? "Prosu_Beta_Setup.exe" : "Prosu_Setup.exe",
    "releases": (Boolean(process.env.BETA)) ? "https://prosu-desktop-beta.now.sh" : "https://prosu-desktop-stable.now.sh",
    "loadingGif": path.join(__dirname, "icons/Installing-Animation.gif"),
    "setupIcon": path.join(__dirname, "icons/desktop_icon.ico"),
    "certificateFile": "./CodeSigning.pfx",
    "certificatePassword": process.env.ELECTRON_FORGE_ELECTRON_WINSTALLER_CONFIG_CERTIFICATE_PASSWORD
  },
  github_repository: {
    "owner": "Arm1stice",
    "name": "prosudesktop",
    "prerelease": Boolean(process.env.BETA)
  }
}
