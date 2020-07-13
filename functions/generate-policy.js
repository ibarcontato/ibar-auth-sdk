module.exports = generatePolicy = function(requesterUser, effect, resource) {
  var authResponse = {};
  
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
      "requesterUser": requesterUser
  };
  return authResponse;
}