
const CryptoJS = require('crypto-js');
const { isObject } = require('ibar-sdk').validations;

const encryptSecret = 'requesterUser';

module.exports = function createRequesterUser(user) {
  try {
    if (!isObject(user))
      return '';

    const encrypedRequesterUser = CryptoJS.AES.encrypt(JSON.stringify(user), encryptSecret).toString();
    return encrypedRequesterUser;
    
  } catch (err) {
    return '';
  }
}