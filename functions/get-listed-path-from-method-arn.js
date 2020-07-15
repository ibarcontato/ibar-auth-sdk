const { throwIfIsNotString, throwErrorResponseModel } = require('ibar-sdk').throws;

module.exports = function getListedPathFromMethodArn(methodArn) {
  throwIfIsNotString(methodArn, '"methodArn" should be a string.');
  let listedPath = methodArn.split('/');
  listedPath.shift();
  listedPath.shift();

  if (listedPath.length === 0)
    throwErrorResponseModel(methodArn, '"listedPath" should not be an empty list.');

  return listedPath;
}