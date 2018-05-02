module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "karma-typescript"],
    files: [
      { pattern: "src/js/**/*.ts" }
      ],
    reporters: ["dots", "karma-typescript"], // progress
    preprocessors: {
      "src/**/*.ts": "karma-typescript"
    },
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless"],
    autoWatch: false, // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  });
};
