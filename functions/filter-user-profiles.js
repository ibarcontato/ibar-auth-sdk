const { throwIfIsNotString, throwIfIsNotArray, throwIfIsEmptyArray} = require('ibar-sdk').throws;

module.exports = function filterUserProfiles(userProfiles, resourcePath, estabId) {
  throwIfIsNotString(estabId, '"estabId" should be a string.');
  throwIfIsNotArray(userProfiles, '"userProfiles" should be a list.');
  throwIfIsEmptyArray(userProfiles, '"userProfiles" should not be empty.')

  const filteredList = userProfiles.filter(value => value.estabs.includes(estabId) && value.allowedPaths.includes(resourcePath))
  return filteredList;
}