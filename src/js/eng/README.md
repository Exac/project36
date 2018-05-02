# Project36

### Development Environment Requirements
1. You must allow silent debugging due to the debugger notification panel resetting the canvas on
load. Visit `chrome://flags` in Chrome, search for `silent debugging`, and enable it.
2. Next, in Chrome, install the `Xdebug Helper` extension by Wrep.
3. Next, in WebStorm, open settings (alt+ctrl+S), and search for `safe write` and disable it under
System Settings. This enables webpack to watch your files for changes.

### Development Environment with Webpack
To develop, first run the build script `npm run build`.
Next, right-click `index.html` and select `Debug index.html`.
