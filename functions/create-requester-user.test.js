const CryptoJS = require("crypto-js");

const createRequesterUser = require('./create-requester-user');

const encryptSecret = 'requesterUser';

describe('\n function createRequesterUser(user)', () => {
  test('should return encrypted string when user is object', () => {
    const user = { id: 'userId' };

    const expected = CryptoJS.AES.encrypt(JSON.stringify(user), encryptSecret).toString();

    try {
      const received = createRequesterUser(user);

      const decryptedReceived = CryptoJS.AES.decrypt(received, encryptSecret).toString(CryptoJS.enc.Utf8);
      const decryptedExpected = CryptoJS.AES.decrypt(expected, encryptSecret).toString(CryptoJS.enc.Utf8);

      expect(decryptedReceived).toEqual(decryptedExpected);
    } catch (received) {
      fail();
    }
  })

  test('should return empty string when user is not object', () => {
    const users = ['', 1, true, () => { }, [], undefined, null];

    for (let user of users) {
      const expected = '';

      try {
        const received = createRequesterUser(user);
        expect(received).toEqual(expected);
      } catch (received) {
        fail();
      }
    }
  })
})