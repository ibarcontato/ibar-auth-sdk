const { throwErrorResponseModel } = require('ibar-sdk').throws;
const CryptoJS = require('crypto-js');

module.exports = async function decryptToken(token, tokenSecret) {
  try {
    const decryptedToken = CryptoJS.AES.decrypt(token, tokenSecret).toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedToken);
  } catch (err) {
    throwErrorResponseModel(token, err.message);
  }
} 