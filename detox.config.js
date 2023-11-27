module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: ['e2e/**/*.spec.ts'],
  configurations: {
    ios: {
      device: {
        type: 'iPhone 11',
      },
    },
    android: {
      device: {
        avdName: 'Pixel_3_API_28',
      },
    },
    app: {
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator',
    },
  },
};
