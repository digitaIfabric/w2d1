module.exports = function getHTML (options, callback) {

    var https = require('https');
    var httpsString = "";

    /* Add your code here */
    https.get(options, function (response) {

        response.on('data', function (data) {
            console.log('Chunk Received. Length:', data.length);
            httpsString += data;
            callback(httpsString);
        });


    });


    // function printHTML(html) {
    //     console.log(html);
    // }

}