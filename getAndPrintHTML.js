var https = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

function getAndPrintHTMLOptions (options) {

    var httpsString = "";
    var requestOptions = options;

    /* Add your code here */
    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        response.on('data', function (data) {
            console.log('Chunk Received. Length:', data.length);
            httpsString += data;

        });

        response.on('end', function() {
            console.log(httpsString);
        });

    });

}

getAndPrintHTMLOptions(options);