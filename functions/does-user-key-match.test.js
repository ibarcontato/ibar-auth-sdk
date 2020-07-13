const doesUserKeyMatch = require('./does-user-key-match');

describe.only('\n function doesUserKeyMatch(userKeyFromToken, userKeyFromDb)', () => {
  test('should return true when userKeyFromToken and userKeyFromDb match', () => {
    const userKeyFromToken = 'userKey';
    const userKeyFromDb = 'userKey';

    const expected = true;

    try {
      const received = doesUserKeyMatch(userKeyFromToken, userKeyFromDb)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })

  test('should return false when userKeyFromToken and userKeyFromDb do not match', () => {
    const userKeyFromTokens = [1, true, '', {}, [], () => { }, null, undefined];
    const userKeyFromDb = 'userKey';

    const expected = false;

    for (let userKeyFromToken of userKeyFromTokens) {
      try {
        const received = doesUserKeyMatch(userKeyFromToken, userKeyFromDb)
        expect(received).toEqual(expected);
      } catch (received) {
        fail();
      }
    }
  })

})