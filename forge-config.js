require('dotenv').config()
module.exports = {
  make_targets: {
    win32: [
      "squirrel"
    ]
  },
  electronPackagerConfig: {
    packageManager: "npm",
    quiet: true,
    protocol: "prosu://",
    appCopyright: "Copyright (c) 2018 Wyatt Calandro",
    asar: true,
    executableName: (Boolean(process.env.BETA)) ? "Prosu Beta" : "Prosu",
    icon: "./icons/desktop_icon.ico"
  },
  electronWinstallerConfig: {
    "name": "prosudesktop",
    "exe": (Boolean(process.env.BETA)) ? "Prosu Beta" : "Prosu",
    "description": "A program that allows you to backup your osu! beatmaps",
    "title": (Boolean(process.env.BETA)) ? "Prosu Beta" : "Prosu",
    "setupExe": (Boolean(process.env.BETA)) ? "Prosu Beta Setup" : "Prosu Setup",
    "releases": (Boolean(process.env.BETA)) ? "https://prosu-desktop-beta.now.sh" : "https://prosu-desktop-releases.now.sh",
    "setupIcon": "./icons/desktop_icon.ico",
    "certificateFile": "./CodeSigning.pfx"
  },
  github_repository: {
    "owner": "Arm1stice",
    "name": "prosudesktop",
    "prerelease": Boolean(process.env.BETA)
  }
}
