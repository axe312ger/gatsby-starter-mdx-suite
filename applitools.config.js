const { name: appName } = require('./package.json')

module.exports = {
  appName,
  batchName: 'Simple Starter Tests',
  browser: [
    // { width: 1366, height: 768, name: 'firefox-two-versions-back' },
    { width: 1920, height: 1080, name: 'chrome-two-versions-back' },
    // { width: 1024, height: 768, name: 'safari-one-version-back' },
    // { deviceName: 'iPhone X', screenOrientation: 'portrait' },
    // { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
    // {
    //   iosDeviceInfo: {
    //     deviceName: 'iPhone XR',
    //     screenOrientation: 'horizontal',
    //     iosVersion: 'latest-1',
    //   },
    // },
  ],
}
