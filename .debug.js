const CryptoJS = require('crypto-js');
const { debugResult } = require('ibar-sdk').utils;
const { tokenSecret } = require('./tokenSecret')

const encryptObj = CryptoJS.AES.encrypt(JSON.stringify({ changedBy: 'changedBy', userKey: 'userKey' }), 'secret').toString();
console.log(CryptoJS.AES.decrypt(encryptObj, tokenSecret).toString(CryptoJS.enc.Utf8))
//U2FsdGVkX18C3Nu6uE2U/boyzZDVdy/cwLitdEklGW24vK8aO92X+bn8DCmcmuLl29ryaVH7aYYvyBK7mQ9R4w==

console.log(encryptObj)
// debugResult(method)
