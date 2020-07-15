const generatePolicy = require('./generate-policy');

describe('\n generatePolicy = function(user, effect, resource)', () => {
  test('should return success object when inputs are valid.', () => {
    const user = { id: 'userId' };
    const effect = 'Allow';
    const resource = 'resource';

    const expected = {
      principalId: 'userId',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [{
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource
        }]
      },
      context: {
        requesterUser: 'encryptedUser'
      }
    };

    try {
      const received = generatePolicy(user, effect, resource)
      received.context.requesterUser = 'encryptedUser';
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })

  test('should return error object when user is not object', () => {
    const users = ['', 1, true, () => { }, [], null, undefined];
    const effect = 'Allow';
    const resource = 'resource';

    for (let user of users) {
      const expected = JSON.stringify({
        statusCode: 400,
        errorMessage: '"user" should be object.',
        inputData: user
      });

      try {
        const received = generatePolicy(user, effect, resource)
        fail();
      } catch (received) {
        expect(JSON.parse(received)).toEqual(JSON.parse(expected));
      } 
    }  

  })

})