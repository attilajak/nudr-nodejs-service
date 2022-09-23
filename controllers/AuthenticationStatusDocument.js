'use strict';

var utils = require('../utils/writer.js');
var AuthenticationStatusDocument = require('../service/AuthenticationStatusDocumentService');

module.exports.createAuthenticationStatus = function createAuthenticationStatus (req, res, next, body, ueId) {
  AuthenticationStatusDocument.createAuthenticationStatus(body, ueId)
    .then(function (response) {
      console.log("Getting into DEADLOCK :< #$#");
      var loop = true,
       block = setTimeout(function(){loop = false}, 1);
      while(loop);
      
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
