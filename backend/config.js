'use strict';
const path = require('path');

const config = {
  buildDir: path.join(__dirname, '..', 'build'),
  bundles: null, // placeholder
  bundleFile: '.bundles.json'
};
config.bundles = require(path.join(config.buildDir, config.bundleFile));

module.exports = config;
