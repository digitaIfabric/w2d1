var https = require('https');


function getHTML (options, callback) {

    var httpsString = "";
    var requestOptions = options;

    /* Add your code here */
    https.get(requestOptions, function (response) {

        response.on('data', function (data) {
            console.log('Chunk Received. Length:', data.length);
            httpsString += data;
            callback(httpsString);
        });


    });
}

function printHTML (html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);