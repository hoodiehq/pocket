'use strict';

var Controller = require('./controllers/index');

app.module('pocket.login', function () {

  this.addInitializer(function (options) {
    new Controller(options);
  });

});

module.exports = app;

