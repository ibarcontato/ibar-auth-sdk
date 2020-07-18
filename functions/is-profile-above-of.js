module.exports = function isProfileAboveOf(aboveProfiles, belowProfile, profileHierarchy) {
  for (let aboveProfile of aboveProfiles) {
    const profiles = profileHierarchy[aboveProfile];
    if (profiles.includes(belowProfile)) 
      return true;
    else {
      const result = isProfileAboveOf(profiles, belowProfile, profileHierarchy);;
      if (result)
        return result;
    }
  }
  return false;
}




