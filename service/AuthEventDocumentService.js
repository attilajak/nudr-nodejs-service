'use strict';


/**
 * To remove the Authentication Status of a UE
 *
 * ueId String UE id
 * no response value expected for this operation
 **/
exports.deleteAuthenticationStatus = function(ueId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the Authentication Status of a UE
 *
 * ueId String UE id
 * fields List attributes to be retrieved (optional)
 * supportedFeatures String Supported Features (optional)
 * returns inline_response_200
 **/
exports.queryAuthenticationStatus = function(ueId,fields,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "timeStamp" : "2000-01-23T04:56:07.000+00:00",
  "nfInstanceId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "servingNetworkName" : "servingNetworkName",
  "resetIds" : [ "resetIds", "resetIds" ],
  "success" : true,
  "nfSetId" : "nfSetId",
  "authRemovalInd" : false,
  "authType" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

