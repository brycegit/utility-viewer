const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const fs = require('fs');

const PORT = process.env.PORT || 5000;

if (cluster.isMaster) {

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  app.use(express.static(__dirname));
  
  app.get('/api', function (req, res) {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'utilData.json'), 'utf8'));
    res.set('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(data));
  });
  
  app.get('*', function(req, res) {
    res.redirect('/');
  });

  app.listen(PORT);
}



/*
TODO

FE
create two pages
create two charts
admin area to change data
*/

// http://recharts.org/en-US/api
// https://github.com/mars/heroku-cra-node