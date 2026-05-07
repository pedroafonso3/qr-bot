const { getSession, createSession } = require("../services/sessionManager");
const { createThread } = require("../services/threadManager");
const { readQRCode } = require("../services/qrReader");
const { resetTimeout } = require("../utils/resetTimeout");

module.exports = async (message) => {
  try {
    if (message.author.bot) return;

    const isMainChannel = message.channel.id === process.env.CHANNEL_ID;

    const isThread = message.channel.isThread();

    if (!isMainChannel && !isThread) return;

    if (!message.attachments.size) return;

    const attachment = message.attachments.first();

    if (
      !attachment.contentType ||
      !attachment.contentType.startsWith("image")
    ) {
      return;
    }

    let session = getSession(message.author.id);

    if (!session && isMainChannel) {
      const thread = await createThread(message);

      session = {
        thread,
        timeout: null,
      };

      createSession(message.author.id, session);
    }

    if (!session) return;

    const qrData = await readQRCode(attachment.url);

    if (!qrData) {
      await message.channel.send("❌ Nenhum QR detectado.");

      return;
    }

    await session.thread.send({
      files: [attachment.url],
      content: `🔗 Link:\n${qrData}`,
    });

    if (isMainChannel) {
      await message.delete().catch(() => {});
    }

    resetTimeout(message.author.id, session);

    console.log(`QR processado: ${message.author.tag}`);
  } catch (err) {
    console.error(err);
  }
};
