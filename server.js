const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const  bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const result = [];

app.use('/', router);



router.post('/api/labels', urlencodedParser, function(req, res){
  if(!req.body){
    console.log('no request found');
  } else {
  // call detectLabels on post request params
  result.push(req.body);

  // return json
  res.json(result)
  }
});


var config = {
    projectId: 'mysterious-frequency',
    keyFilename: './mysterious-frequency-2b2baff55708.json'
}
var gcloud = require('gcloud')(config);

var vision = gcloud.vision();

function detectLabels (inputFile, callback) {
  vision.detectLabels(inputFile, { verbose: true }, function (err, labels) {
    if (err) {
      return callback(err);
    }
    console.log('result:', JSON.stringify(labels, null, 2));
    callback(null, labels);
  });
}

function main (inputFile, callback) {
  detectLabels(inputFile, function (err, labels) {
    if (err) {
      return callback(err);
    }
    console.log('Found label: ' + labels[0].desc + ' for ' + inputFile);
    callback(null, labels);
  });
}

if (module === require.main) {
  if (process.argv.length < 3) {
    console.log('Usage: node labelDetection <inputFile>');
    process.exit(1);
  }
  var inputFile = process.argv[2];
  main(inputFile, console.log);
}

