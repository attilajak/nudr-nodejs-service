'use strict';

var utils = require('../utils/writer.js');
var AuthEventDocument = require('../service/AuthEventDocumentService');

module.exports.deleteAuthenticationStatus = function deleteAuthenticationStatus (req, res, next, ueId) {
  AuthEventDocument.deleteAuthenticationStatus(ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryAuthenticationStatus = function queryAuthenticationStatus (req, res, next, ueId, fields, supportedFeatures) {
  AuthEventDocument.queryAuthenticationStatus(ueId, fields, supportedFeatures)
    .then(function (response) {
      var response = '{   "nfInstanceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "success": true,   "timeStamp": "2022-08-30T14:24:16.777Z",   "authType": "5G_AKA",   "servingNetworkName": "5G:NSWO",   "authRemovalInd": false,   "nfSetId": "string",   "resetIds": [     "string"   ] }';
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
