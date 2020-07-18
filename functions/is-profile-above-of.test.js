const isProfileAboveOf = require('./is-profile-above-of');

const profileHierarchy = {
  profile1: ['profile2'], 
  profile2: ['profile3'],
  profile3: ['profile4', 'profile5'],
  profile4: [],
  profile5: ['profile6'],
  profile6: ['profile7', 'profile8', 'profile9', 'profile10'],
  profile7: [],
  profile8: [],
  profile9: [],
  profile10: [],
  profile11: ['profile13'],
  profile12: ['profile6'],
  profile13: ['profile14'],
  profile14: ['profile6'], 
}

describe('\n function isProfileAboveOf(aboveProfiles, belowProfile, profileHierarchy)', () => {
  test('should return true when belowProfile is below of some aboveProfiles', () => {
    const aboveProfiles = ['profile10', 'profile6', 'profile2'];
    const belowProfile = 'profile10';

    const expected = true;

    try {
      const received = isProfileAboveOf(aboveProfiles, belowProfile, profileHierarchy)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  }) 

  test('should return false when belowProfile is not below of some aboveProfiles', () => {
    const aboveProfiles = ['profile10', 'profile9'];
    const belowProfile = 'profile6';

    const expected = false;

    try {
      const received = isProfileAboveOf(aboveProfiles, belowProfile, profileHierarchy)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })

  test('should return false when any error happens', () => {
    const aboveProfiles = undefined;
    const belowProfile = undefined;
    const expected = false;

    try {
      const received = isProfileAboveOf(aboveProfiles, belowProfile, profileHierarchy)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })

  test('should return false when aboveProfiles is above but belowProfile do not belong to it', () => {
    const aboveProfiles = ['profile3'];
    const belowProfile = 'profile14';
    const expected = false;

    try {
      const received = isProfileAboveOf(aboveProfiles, belowProfile, profileHierarchy)
      expect(received).toEqual(expected);
    } catch (received) {
      fail();
    }
  })
})