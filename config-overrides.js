const path = require('path')

module.exports = function override(config, env) {
  config.resolve.modules.unshift(path.resolve(__dirname, 'src/lib'));
  return config;
}
