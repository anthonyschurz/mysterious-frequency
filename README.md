### Google Vision API Labels Endpoint

Tentative instructions:

1. git clone this project or hit the server if you have the URL
2. npm install
3. create a Google Vision project
4. replace 'mysterious-frequency' with your project name in server.js, line 2
5. from the command line, run `export GCLOUD_PROJECT=` and type your project name, no quotes
6. change the name of your project in package.json (optional)
7. create and download your API keys .json file and reference it in server.js, line 3
8. from the command line, run `export GOOGLE_APPLICATION_CREDENTIALS=` and enter the name of your new .json file 

If all is well, you should be able to run the following command in Terminal and get a `result` array of objects back with `desc`, `mid` and `score` values:

`node server.js resources/blue_moon_square.jpg`


