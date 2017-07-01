// JavaScript source code
phantom.casperPath = "C:/casperjs/";
phantom.injectJs(phantom.casperPath + "/bin/bootstrap.js");

var utils = require('utils');

var casper = require('casper').create();

casper.start('https://fp.trafikverket.se');

casper.wait(5000, function () {
    this.echo(this.getTitle());
});

casper.then(function () {
    casper.exit();
});

casper.run();


