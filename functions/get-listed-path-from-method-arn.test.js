const getListedPathFromMethodArn = require('./get-listed-path-from-method-arn');

describe('\n function getListedPathFromMethodArn(methodArn)', () => {
  test('should return success array when methodArn is valid', () => {
    const methodArn = 'arn:aws:execute-api:us-east-1:920203088067:hbt5m1vhm8/dev/GET/test';

    const expected = ['GET', 'test'];

    try {
      const received = getListedPathFromMethodArn(methodArn)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })

  test('should return error object when methodArn is not string', () => {
    const methodArns = [1, true, {}, [], () => { }, null, undefined];

    for (let methodArn of methodArns) {
      const expected = JSON.stringify({
        statusCode: 400,
        inputData: methodArn,
        errorMessage: '"methodArn" should be a string.'
      });

      try {
        const received = getListedPathFromMethodArn(methodArn)
        fail();
      } catch (received) {
        expect(JSON.parse(received)).toEqual(JSON.parse(expected));
      }
    }
  })

  test('should return error object when listedPath is an empty list', () => {
    const methodArn = '';

    const expected = JSON.stringify({
      statusCode: 400,
      inputData: methodArn,
      errorMessage: '"listedPath" should not be an empty list.'
    });

    try {
      const received = getListedPathFromMethodArn(methodArn)
      fail();
    } catch (received) {
      expect(JSON.parse(received)).toEqual(JSON.parse(expected));
    }
  })
  //
})