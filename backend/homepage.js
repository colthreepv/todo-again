import path from 'path';
import levelup from 'levelup';
import Promise from 'bluebird';

const lvl = levelup(path.join(__dirname, '..', 'level.db'));
Promise.promisifyAll(lvl);



export default function homepage () {
  const initialState = getState().catch(NotFoundError, () => undefined);
  return initialState.then(templateHome);
}

// retrieves state from levelup
function getState () {
  return lvl.getAsync('state').then(data => JSON.parse(data));
}

function setState (state) {
  return lvl.putAsync('state', JSON.stringify(state));
}

function NotFoundError (err) { return err.notFound; }

// templating
function templateHome (initialState) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="container"></div>
    <script>window.STATE_FROM_SERVER = ${initialState}</script>
    <script src="/build/vendor.bundle.js"></script>
    <script src="/build/bundle.js"></script>
  </body>
  </html>`;
}
