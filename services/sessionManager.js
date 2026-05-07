const sessions = new Map();

function getSession(userId) {
  return sessions.get(userId);
}

function createSession(userId, data) {
  sessions.set(userId, data);
}

function removeSession(userId) {
  sessions.delete(userId);
}

module.exports = {
  getSession,
  createSession,
  removeSession,
};
