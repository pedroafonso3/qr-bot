async function createThread(message) {
  return await message.startThread({
    name: `🔐 ${message.author.username}`,
    autoArchiveDuration: 60,
  });
}

module.exports = {
  createThread,
};
