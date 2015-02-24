var request = require('request');
var expect = require('../../node_modules/chai/chai').expect;
var basicServer = require('../basic-server').server;


var requestParams = {method: 'POST',
  uri: 'http://127.0.0.1:3000/classes/messages',
  json: {
    username: 'Jono',
    message: 'Do my bidding!'}

request(requestParams, function(error, response, body) {
  console.log(response.statusCode)
});


request(requestParams, function(error, response, body) {
  request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
      console.log(requestParams.method, body);
      var messages = JSON.parse(body).results;
      expect(messages[0].username).to.equal('Jono');
      expect(messages[0].message).to.equal('Do my bidding!');
      done();
    });
