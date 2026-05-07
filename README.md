
# QR Reader Discord Bot

A Discord bot that automatically detects QR Codes from uploaded images, creates isolated user threads, extracts embedded URLs, and keeps channels clean by automatically removing uploaded QR images after processing.

Built with Node.js, Discord.js, Jimp, and jsQR.

---

# Features

- Automatic QR Code detection from uploaded images
- Automatic thread creation per user
- Isolated QR processing sessions
- Automatic QR image deletion after processing
- Reusable user threads
- Session timeout and automatic cleanup
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

```
qr-bot/
├── events/
│   └── messageCreate.js
│
├── services/
│   ├── qrReader.js
│   ├── sessionManager.js
│   └── threadManager.js
│
├── utils/
│   └── resetTimeout.js
│
├── index.js
├── package.json
├── .env.example
└── .gitignore
```


---

# Installation

## Clone the repository

```bash
git clone https://github.com/pedroafonso3/qr-bot.git
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
- Create Public Threads
- Send Messages in Threads
- Manage Threads
- Attach Files

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

1. User uploads a QR Code image in the configured channel
2. Bot automatically detects the QR Code
3. A dedicated thread is created for the user
4. QR content is extracted and sent inside the thread
5. Uploaded QR image is deleted automatically
6. User can continue sending QR Codes inside the same thread
7. After inactivity timeout, the thread is deleted automatically

---

# Session System

- Each user gets an isolated processing thread
- Threads are automatically reused
- Sessions expire after inactivity
- Automatic cleanup prevents channel clutter
- Multiple users can use the bot simultaneously without conflicts

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

- Multi QR detection
- Anti-spam system
- Logging system
- Database integration
- Queue system for processing

---

# License

MIT
