const decryptToken = require('./decrypt-token');
const encryptedToken = 'U2FsdGVkX18C3Nu6uE2U/boyzZDVdy/cwLitdEklGW24vK8aO92X+bn8DCmcmuLl29ryaVH7aYYvyBK7mQ9R4w==';

describe('\n function decryptToken(token, tokenSecret)', () => {
  test('should return decrypted token when token is valid', async () => {
    const token = encryptedToken;

    const expected = {
      changedBy: 'changedBy',
      userKey: 'userKey'
    };

    await decryptToken(token, 'tokenSecret')
      .then(received => {
        expect(received).toEqual(expected);
      })
      .catch(received => {
        fail();
      });
  })

  test('should return error object when anything goes wrong', async () => {
    const token = undefined;

    const expected = JSON.stringify({
      statusCode: 400,
      inputData: token
    });

    await decryptToken(token, 'tokenSecret')
      .then(received => { 
        fail();
      })
      .catch(received => {
        received = JSON.parse(received);
        received.errorMessage = undefined;
        expect(received).toEqual(JSON.parse(expected));
      });
  })
})