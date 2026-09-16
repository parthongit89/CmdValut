# CmdVault - Command Line Quick Reference & Cheat Sheet

[![Status: Under Development](https://img.shields.io/badge/Status-Under--Development-f59e0b?style=for-the-badge&logo=git&logoColor=white)](https://cmd-valut.vercel.app/)
[![Vercel Deployment](https://img.shields.io/badge/Live%20Demo-cmd--valut.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://cmd-valut.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> 🚧 **PROJECT NOTICE**: This repository is actively **flagged as under-development**.  
> **Live Website**: [CmdVault - Command Line Quick Reference & Cheat Sheet](https://cmd-valut.vercel.app/)

---

A modern, fast, and responsive web application replicating the Figma design for **CmdVault** with Google Material 3 aesthetic. Provides instant access to essential commands across **GitHub-Git**, **Linux-Bash**, and **PowerShell-Windows** with 1-click clipboard copy, real-time search, operating system filtering, dark/light theme toggle, and Firebase GitHub OAuth.

## 🚀 Live Demo
Visit the live deployed site on Vercel:
👉 **[CmdVault - Command Line Quick Reference & Cheat Sheet](https://cmd-valut.vercel.app/)**

---

## ✨ Features

- **Google Material 3 Aesthetic**: Designed with Google dark palette (`#131314`, `#1e1f20`, `#282a2c`), Google brand accents (Blue `#8ab4f8`, Green `#81c995`, Amber `#fdd663`, Red `#f28b82`), and 4-color gradient brand badge.
- **Under-Development Status Indicator**: Visual status chip reflecting active development.
- **Local Typography**: Embedded `@font-face` rules for local `Google Sans Flex` and `Google Sans Code` fonts.
- **Instant Search**: Real-time matching across commands, descriptions, and categories with keyboard shortcut (`/` to search).
- **Categorized Command Vault**:
  - **GitHub-Git**: Setup, Setup & Init, Stage & Snapshot, Branch & Merge, Share & Update, Tracking Path Changes, Temporary Commits, Rewrite History, Inspect & Compare.
  - **Linux-Bash**: File Management, Permissions & Ownership, System Diagnostics, Systemd Services, Compression.
  - **PowerShell-Windows**: Navigation, Process & Service Control, System & Network Administration.
- **Platform Filter Chips**: Filter pills for Windows, Linux, and macOS.
- **1-Click Copy**: Instant clipboard copy with animated green checkmark and Material 3 snackbar feedback.
- **GitHub Authentication**: Firebase Auth with GitHub OAuth provider and secure runtime environment resolution.
- **Dark / Light Mode**: Seamless theme switching with local storage persistence.
- **Vercel Edge Ready**: Pure HTML5/CSS3/JavaScript with edge caching headers in `vercel.json`.

---

## 📁 Project Structure

```
CmdValut/
├── index.html            # Main semantic HTML5 interface
├── css/
│   └── style.css         # Complete Google Material 3 stylesheet
├── js/
│   ├── commands-data.js  # Structured command database
│   ├── firebase-config.js# Firebase App & GitHub OAuth configuration
│   ├── env.template.js   # Public environment variable template
│   └── app.js            # Reactive rendering, search, copy & theme logic
├── api/
│   └── config.js         # Vercel serverless environment variable provider
├── icons/                # SVG & PNG icons (search, copy, sun, OS badges, GitHub)
├── font-familiy/         # Local Google Sans Flex & Google Sans Code TTF files
├── Data Commands/        # Source cheat sheets and PDF references
├── vercel.json           # Vercel deployment configuration
├── .env.example          # Safe environment variables reference
└── README.md             # Documentation
```

---

## 💻 Local Development

Run any static file server, for example with Python:

```bash
python -m http.server 8080
```

Open your browser at `http://localhost:8080`.

---

## 🌐 Production Deployment (Vercel)

1. Repository is deployed at: **[https://cmd-valut.vercel.app/](https://cmd-valut.vercel.app/)**
2. In Vercel Project Settings → **Environment Variables**, add:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`
3. In Firebase Console → **Authentication → Settings → Authorized Domains**, ensure `cmd-valut.vercel.app` is added.
