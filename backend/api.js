'use strict';

const l = require('./level');

function postState (req) {
  return l.setState(req.body).return({ status: 'ok' });
}
// postState['@validator'] = 'To Be Done';

module.exports = { postState };
