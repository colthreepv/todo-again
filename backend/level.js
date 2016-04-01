'use strict';
const path = require('path');
const Promise = require('bluebird');
const levelup = require('levelup');
const lvl = levelup(path.join(__dirname, '..', 'level.db'));
Promise.promisifyAll(lvl);

// retrieves state from levelup
function getState () {
  return lvl.getAsync('state').then(data => JSON.parse(data));
}

function setState (state) {
  return lvl.putAsync('state', JSON.stringify(state));
}

function NotFoundError (err) { return err.notFound; }

module.exports = { getState, setState, NotFoundError };
