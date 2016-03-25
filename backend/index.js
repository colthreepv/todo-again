import express from 'express';
import bodyparser from 'body-parser';
import promesso from 'promesso';

import homepage from './homepage';

const app = express();

app.use(bodyparser.json());

app.get('/', promesso(homepage));

function listenCallback () {
  const address = this.address();
  console.log(`Server listening to http://${address.address}:${address.port}/`);
}

if (require.main === module) app.listen(8080, '127.0.0.1', listenCallback);
