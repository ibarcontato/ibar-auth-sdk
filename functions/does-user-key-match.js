module.exports = function doesUserKeyMatch(userKeyFromToken, userKeyFromDb) {
  try {
    const response = userKeyFromToken === userKeyFromDb;
    return response;
  } catch (err) {
    return false;
  }
}    