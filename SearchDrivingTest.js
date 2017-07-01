// JavaScript source code
phantom.casperPath = "C:/casperjs/";
phantom.injectJs(phantom.casperPath + "/bin/bootstrap.js");

var casper = require('casper').create();

var x = require('casper').selectXPath;

casper.userAgent('Mozilla/4.0 (comptible; MSIE 6.0; Windows NT 5.1)');

casper.start('https://fp.trafikverket.se');

casper.wait(5000, function () {
    casper.click(x('fa fa-car fa-2x'));
});

casper.wait(5000, function () {
    casper.capture('bookingPage.png');
});

casper.run();

