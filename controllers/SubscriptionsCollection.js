'use strict';

var utils = require('../utils/writer.js');
var SubscriptionsCollection = require('../service/SubscriptionsCollectionService');

module.exports.createIndividualSubcription = function createIndividualSubcription (req, res, next, body) {
  SubscriptionsCollection.createIndividualSubcription(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
