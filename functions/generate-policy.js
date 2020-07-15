const { throwIfIsNotObject } = require('ibar-sdk').throws;
const createRequesterUser = require('./create-requester-user');

module.exports = generatePolicy = function (user, effect, resource) {
  throwIfIsNotObject(user, '"user" should be object.');

  var authResponse = {};

  authResponse.principalId = user.id
  if (effect && resource) {
    var policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    var statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  authResponse.context = {
    requesterUser: createRequesterUser(user)
  };
  return authResponse;
}