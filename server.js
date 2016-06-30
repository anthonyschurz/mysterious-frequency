var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var  bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var result = [];

app.use('/', router);



router.post('/api/labels', urlencodedParser, function(req, res){
  if(!req.body){
    console.log('no request found');
  } else {
  // call detectLabels on post request params


    if (module === require.main) {
      if (process.argv.length < 3) {
        console.log('Usage: node labelDetection <inputFile>');
        process.exit(1);
      }
      // var inputFile = process.argv[2];

      main(req.body, console.log);
    }

  // result.push(req.body);

  // return json
  // res.json(result);
  }
});



app.listen(port, function(){
    console.log("Server started on port: ", port);
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



