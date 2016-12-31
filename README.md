# ReactNativeStarter
react native sandbox (targeting android first) 

1. install dependencies: https://facebook.github.io/react-native/docs/getting-started.html

2. after creating project using react-native init, the command react-native run-android doesn't work. results in red screen on device with message "Could not get BatchedBridge, make sure your bundle is packaged correctly"

3. use sumit6b's solution here: https://github.com/facebook/react-native/issues/9336

 `node node_modules/react-native/local-cli/cli.js bundle --platform android --dev true --reset-cache --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug`

 then either `cd android && ./gradlew installDebug `
 or `react-native run-android ` 

4. for live reload do the following:

 `react-native start --port:8088`

 * this doesn't seem to help at all: `adb reverse tcp:8088 tcp:8088`
 * don't forget to turn off firewall
