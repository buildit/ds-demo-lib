const path = require('path');

// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  // Extend it as you need.
  config.resolve.alias = {
      'blabbr-config': path.join(path.resolve(__dirname), './')
    }

  return config;
};
