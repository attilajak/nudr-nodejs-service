'use strict';

var utils = require('../utils/writer.js');
var AccessAndMobilityPolicyDataDocument = require('../service/AccessAndMobilityPolicyDataDocumentService');

module.exports.readAccessAndMobilityPolicyData = function readAccessAndMobilityPolicyData (req, res, next, ueId) {
  AccessAndMobilityPolicyDataDocument.readAccessAndMobilityPolicyData(ueId)
    .then(function (response) {
	    var response = '{ "book" : "walden" } ';
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
