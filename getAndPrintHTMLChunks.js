// while https is built-in to Node, it is a module, so it must be required.
var https = require('https');

function getAndPrintHTMLChunks () {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    /* Add your code here */
    // the callback is invoked when a `data` chunk is received

https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
        console.log('Chunk Received. Length:', data.length);
        console.log(data);

    });

});

}

getAndPrintHTMLChunks();