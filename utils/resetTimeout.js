const { removeSession } = require("../services/sessionManager");

function resetTimeout(userId, session) {
  if (session.timeout) {
    clearTimeout(session.timeout);
  }

  session.timeout = setTimeout(
    async () => {
      try {
        await session.thread.send(
          "⌛ Tempo esgotado! Seja mais rápido da próxima vez.",
        );

        await session.thread.delete();

        removeSession(userId);

        console.log(`Sessão encerrada: ${userId}`);
      } catch (err) {
        console.error(err);
      }
    },
    5 * 60 * 1000,
  );
}

module.exports = {
  resetTimeout,
};
