var https = require('https');

function getAndPrintHTML () {

    var httpsString = "";
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

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
getAndPrintHTML();