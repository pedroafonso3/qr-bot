require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js");

const messageCreate = require("./events/messageCreate");

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

client.on("messageCreate", messageCreate);

client.login(process.env.TOKEN);
