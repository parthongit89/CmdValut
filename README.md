# CmdVault - Command Line Quick Reference & Cheat Sheet

A modern, fast, and responsive web application replicating the Figma design for **CmdVault**. Provides instant access to essential commands across **GitHub-Git**, **Linux-Bash**, and **PowerShell-Windows** with 1-click clipboard copy, real-time search, operating system filtering, dark/light theme toggle, and Firebase GitHub OAuth.

## Features

- **Pixel-Accurate Design**: Faithfully replicates Figma design node `767:3` with dark surface styling (`#1e1e1e`, `#1a1a1a`), custom opacities, and border radiuses.
- **Local Typography**: Powered by local `Google Sans Flex` and `Google Sans Code` fonts stored in `font-familiy/`.
- **Instant Search**: Live filtering across command strings, descriptions, categories, and sections with matching term highlights.
- **Categorized Command Vault**:
  - **GitHub-Git**: Setup, Setup & Init, Stage & Snapshot, Branch & Merge, Share & Update, Tracking Path Changes, Temporary Commits, Rewrite History, Inspect & Compare.
  - **Linux-Bash**: File & Directory Management, Permissions & Ownership, System Diagnostics & Hardware, Systemd Service Management, Archiving & Compression.
  - **PowerShell-Windows**: Navigation & Item Management, Process & Service Control, System & Network Diagnostics.
- **Platform Filters**: Quick filter pills for Windows, Linux, and macOS.
- **1-Click Copy**: Instant clipboard copy with animated checkmark and toast notifications.
- **GitHub Authentication**: Integrated Firebase Authentication with GitHub OAuth provider.
- **Dark / Light Theme**: Toggleable theme with local storage persistence.
- **Vercel Edge Ready**: Pure vanilla HTML5, CSS3, and JavaScript with optimized `vercel.json` caching and security headers.

## Project Structure

```
CmdValut/
├── index.html            # Main semantic HTML5 interface
├── css/
│   └── style.css         # Complete styles, font-face rules, and theme variables
├── js/
│   ├── commands-data.js  # Structured command database
│   ├── firebase-config.js# Firebase App & GitHub OAuth configuration
│   └── app.js            # Reactive rendering, search, copy & theme logic
├── icons/                # SVG & PNG icons (search, copy, sun, os badges, github)
├── font-familiy/         # Local Google Sans Flex & Google Sans Code TTF files
├── Data Commands/        # Source cheat sheets and PDF references
├── vercel.json           # Vercel deployment configuration
├── .env.example          # Environment variables reference
└── README.md             # Documentation
```

## Local Development

Run any static file server, for example with Python:

```bash
python -m http.server 8080
```

Open your browser at `http://localhost:8080`.

## Deployment on Vercel

1. Push this repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework Preset: **Other** (Static HTML).
4. Root Directory: `./`
5. Deploy!
6. Add your Vercel URL to the **Authorized Domains** list in your Firebase Authentication settings.
