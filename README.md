babel-loader is the Webpack loader responsible for taking in the ES6 code and making it understandable by the browser of choice.
Obsviusly babel-loadermakes use of Babel. And Babel must be configured to use a bunch of presets:

babel-preset-env: for compiling Javascript ES6 code down to ES5 (please note that babel-preset-es2015 is now deprecated)
babel-preset-react: for compiling JSX and other stuff down to Javascript