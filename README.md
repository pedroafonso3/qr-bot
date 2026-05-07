# QR Reader Discord Bot

A Discord bot that automatically reads QR Codes from uploaded images, extracts the embedded URL, sends it privately to the user via DM, and removes the original image message for better privacy and organization.

Built with Node.js, Discord.js, Jimp, and jsQR.

---

# Features

- Automatic QR Code detection from uploaded images
- Private DM delivery of extracted links
- Automatic message deletion after processing
- Channel restriction support
- Lightweight and fast processing
- Environment variable configuration
- Ready for 24/7 deployment

---

# Tech Stack

- Node.js
- Discord.js
- Axios
- Jimp
- jsQR

---

# Project Structure

```bash
qr-bot/
├── index.js
├── package.json
├── .env
└── .gitignore
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/qr-bot.git
cd qr-bot
```

## Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
CHANNEL_ID=YOUR_CHANNEL_ID
```

---

# Discord Bot Setup

Create your bot in the Discord Developer Portal:

https://discord.com/developers/applications

Enable the following privileged intent:

- Message Content Intent

Required bot permissions:

- View Channels
- Read Message History
- Send Messages
- Manage Messages

---

# Running Locally

```bash
npm start
```

Expected output:

```bash
Bot online YourBotName#0000
```

---

# How It Works

1. User uploads an image containing a QR Code
2. Bot downloads and processes the image
3. QR Code content is extracted
4. Extracted URL is sent privately via DM
5. Original message is deleted automatically

---

# Security Notes

- Never expose your `.env` file
- Never share your Discord bot token
- Use `.gitignore` to protect secrets
- Reset your token immediately if leaked

---

# Deployment

Recommended platforms for 24/7 hosting:

- Railway
- Render
- Oracle Cloud Free Tier
- VPS providers

Example Railway deployment flow:

1. Push repository to GitHub
2. Import repository into Railway
3. Add environment variables
4. Deploy automatically

---

# Future Improvements

- Sharp image processing support
- ZXing QR engine migration
- Multi QR detection
- Anti-spam system
- Logging system
- Database integration
- Dashboard and analytics

---

# License

MIT
