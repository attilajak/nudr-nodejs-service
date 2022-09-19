'use strict';


/**
 * Retrieves the access and mobility policy data for a subscriber
 *
 * ueId String 
 * returns inline_response_200_1
 **/
exports.readAccessAndMobilityPolicyData = function(ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subscCats" : [ "subscCats", "subscCats" ],
  "praInfos" : {
    "key" : {
      "additionalPraId" : "additionalPraId",
      "ecgiList" : [ {
        "eutraCellId" : "eutraCellId",
        "nid" : "nid"
      }, {
        "eutraCellId" : "eutraCellId",
        "nid" : "nid"
      } ],
      "globalRanNodeIdList" : [ {
        "eNbId" : "eNbId",
        "wagfId" : "wagfId",
        "tngfId" : "tngfId",
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "nid" : "nid",
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "SMacroNGeNB-34B89"
      }, {
        "eNbId" : "eNbId",
        "wagfId" : "wagfId",
        "tngfId" : "tngfId",
        "gNbId" : {
          "bitLength" : 22,
          "gNBValue" : "gNBValue"
        },
        "nid" : "nid",
        "n3IwfId" : "n3IwfId",
        "ngeNbId" : "SMacroNGeNB-34B89"
      } ],
      "presenceState" : "",
      "praId" : "praId",
      "trackingAreaList" : [ {
        "tac" : "tac",
        "nid" : "nid",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      }, {
        "tac" : "tac",
        "nid" : "nid",
        "plmnId" : {
          "mnc" : "mnc",
          "mcc" : "mcc"
        }
      } ],
      "ncgiList" : [ {
        "nid" : "nid",
        "nrCellId" : "nrCellId"
      }, {
        "nid" : "nid",
        "nrCellId" : "nrCellId"
      } ],
      "globaleNbIdList" : [ null, null ]
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

