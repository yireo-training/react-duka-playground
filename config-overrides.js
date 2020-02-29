const path = require("path");
const rewireGqlTag = require("react-app-rewire-graphql-tag");

module.exports = function override(config, env) {
  config.resolve.modules.unshift(path.resolve(__dirname, "src/lib"));
  config = rewireGqlTag(config, env);
  return config;
};
