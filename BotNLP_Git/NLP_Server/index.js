const { NlpManager } = require('node-nlp');
const _ = require('lodash');

const fs = require('fs');
const data = fs.readFileSync('model.nlp', 'utf8');
const manager = new NlpManager();
manager.import(data);


const express = require('express');
const bodyParser = require('body-parser');

var app = express();
//process.env.PORT;
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
  res.header("Access-Control-Expose-Headers", "true");
  res.header("Access-Control-Allow-Credentials","true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  next();
});

app.listen(port, () => {
  console.log('########## API #############');
  console.log(`Started up at port ${port}`);
});

app.post('/process', (req, res) => {
   var body = _.pick(req.body, ['text']);
  (async() => {
      const response = await manager.process('pt', body.text);
      res.status(200).send(response);
  })();
});


module.exports = {app};
