# Project36

## Usage

## Development
##### Requirements

Include the following in the HTML: ```<canvas id="project36"></canvas>``` then include the javascript (built to /dist/bundle).

In WebStorm, open settings (alt+ctrl+S), and search for ```safe write``` and disable it under System Settings. This enables webpack to watch your files for changes.

##### Compilation:

Have your IDE compile typescript files in-place automatically for the fastest performance.

##### Installation:

```
npm install
```

##### Build:
```
npm run build:watch
```

##### Dev Server:
```
npm run build:serve
```
To refresh in the browser, install the LiveReload plugin, set the Host URL to ```http://localhost/``` and set the source files to: ```http://localhost/dist/*.js```

##### Test:
```
npm run test:runner
```
will test and watch for changes to re-test.
```
npm run test
```
will test once and exit.


