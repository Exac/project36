module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "karma-typescript"],
    files: [
      { pattern: "src/js/**/*.ts" }
      ],
    karmaTypescriptConfig: {
      compilerOptions: {
        module: "commonjs"
      },
      tsconfig: "./tsconfig.json",
    },
    reporters: ["progress", "karma-typescript"], // dots, progress
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
