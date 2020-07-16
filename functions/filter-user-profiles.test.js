const filterUserProfiles = require('./filter-user-profiles');


describe('\n function filterUserProfiles(userProfiles, resourcePath, estabId)', () => {
  test('should return filtered list when inputs are valid', () => {
    const userProfiles = [
      { name: 'profileName1', allowedPaths: ['HTTP_VERB1/resourcePath1', 'HTTP_VERB1/resourcePath2'], estabs: ['estabId1', 'estabId2'] },
      { name: 'profileName2', allowedPaths: ['HTTP_VERB1/resourcePath1',], estabs: ['estabId1'] },
    ];
    const resourcePath = 'HTTP_VERB1/resourcePath1';
    const estabId = 'estabId2';

    const expected = [
      { name: 'profileName1', allowedPaths: ['HTTP_VERB1/resourcePath1', 'HTTP_VERB1/resourcePath2'], estabs: ['estabId1', 'estabId2'] },
    ];

    try {
      const received = filterUserProfiles(userProfiles, resourcePath, estabId)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })

  test('should return an error object when estabId is not a string', () => {
    const userProfiles = [
      { name: 'profileName1', allowedPaths: ['HTTP_VERB1/resourcePath1', 'HTTP_VERB1/resourcePath2'], estabs: ['estabId1', 'estabId2'] },
      { name: 'profileName2', allowedPaths: ['HTTP_VERB1/resourcePath1',], estabs: ['estabId1'] },
    ];
    const resourcePath = 'HTTP_VERB1/resourcePath2';
    const estabIds = [1, true, {}, [], () => { }, null, undefined];


    for (let estabId of estabIds) {
      const expected = JSON.stringify({
        statusCode: 400,
        inputData: estabId,
        errorMessage: '"estabId" should be a string.'
      });

      try {
        const received = filterUserProfiles(userProfiles, resourcePath, estabId)
        fail();
      } catch (received) {
        expect(JSON.parse(received)).toEqual(JSON.parse(expected));
      }
    }
  })

  test('should return an error object when profiles is not an array', () => {
    const userProfilesList = [1, true, {}, '', () => { }, null, undefined];
    const resourcePath = 'HTTP_VERB1/resourcePath2';
    const estabId = 'estabId1';


    for (let userProfiles of userProfilesList) {
      const expected = JSON.stringify({
        statusCode: 400,
        inputData: userProfiles,
        errorMessage: '"userProfiles" should be a list.'
      });

      try {
        const received = filterUserProfiles(userProfiles, resourcePath, estabId)
        fail();
      } catch (received) {
        expect(JSON.parse(received)).toEqual(JSON.parse(expected));
      }
    }
  })

  test('should return an error object when profiles is empty', () => {
    const userProfiles = [];
    const resourcePath = 'HTTP_VERB1/resourcePath2';
    const estabId = 'estabId1';

    const expected = JSON.stringify({
      statusCode: 400,
      inputData: userProfiles,
      errorMessage: '"userProfiles" should not be empty.'
    });

    try {
      const received = filterUserProfiles(userProfiles, resourcePath, estabId)
      fail();
    } catch (received) {
      expect(JSON.parse(received)).toEqual(JSON.parse(expected));
    }
  })
})