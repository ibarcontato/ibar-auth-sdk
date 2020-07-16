const { throwIfIsNotString, throwErrorResponseModel } = require('ibar-sdk').throws;

module.exports = function getResourcePath(methodArn) {
  throwIfIsNotString(methodArn, '"methodArn" should be a string.');
  let listedPath = methodArn.split('/');
  listedPath.shift();
  listedPath.shift();

  if (listedPath.length === 0)
    throwErrorResponseModel(methodArn, '"listedPath" should not be empty.');

  return listedPath.join('/');
}