require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js");

const axios = require("axios");
const { Jimp } = require("jimp");
const jsQR = require("jsqr");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel],
});

client.once("clientReady", () => {
  console.log(`Bot online ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;

    if (message.channel.id !== process.env.CHANNEL_ID) return;

    if (!message.attachments.size) return;

    const attachment = message.attachments.first();

    if (
      !attachment.contentType ||
      !attachment.contentType.startsWith("image")
    ) {
      return;
    }

    const response = await axios.get(attachment.url, {
      responseType: "arraybuffer",
    });

    const image = await Jimp.read(response.data);

    const { data, width, height } = image.bitmap;

    const qr = jsQR(new Uint8ClampedArray(data), width, height);

    if (!qr || !qr.data) return;

    await message.author.send(`🔗Link:\n${qr.data}`);

    await message.delete();

    console.log(`QR processado de ${message.author.tag}: ${qr.data}`);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.TOKEN);
