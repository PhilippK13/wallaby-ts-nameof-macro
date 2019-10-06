const { resolve } = require("path");

module.exports = function override(config, env) {
  return {
    ...config,
    module: {
      ...config.module
    },
    plugins: [...config.plugins],
    resolve: {
      ...config.resolve,
      modules: [...config.resolve.modules, resolve(__dirname, "../src")],
      extensions: [...config.resolve.extensions, ".ts", ".tsx"]
    }
  };
};
