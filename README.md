# Awesome Lineage II [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of tools and utilities for Lineage II players and communities.

---

## Contents

- [Desktop Apps](#desktop-apps)
- [Web Tools](#web-tools)
- [Bots](#bots)

---

## Desktop Apps

- [RebornEasyLoginManager](https://github.com/haswelldev/RebornEasyLoginManager) — Lightweight cross-platform account manager for managing passwords on Lineage 2 Reborn. Supports Windows and Mac. ([Download latest release](https://github.com/haswelldev/RebornEasyLoginManager/releases/latest))

## Web Tools

- [Midnight Calculator](https://haswelldev.github.io/midnight/) — Converts your current in-game time into real-world timestamps showing exactly when in-game midnight (00:00) will occur throughout a chosen day. ([Source](https://github.com/haswelldev/midnight))
- [Shared Timer](https://knix.ovh/) — Shared real-time countdown. Open a room URL, share it with others, and everyone sees the same timer state — perfect for Destro-relog coordination. ([Source](https://github.com/ChocoWhoopies/web-timer))

## Bots

- [TOD Bot](https://github.com/haswelldev/tod-bot) — Lightweight Discord bot to record boss Time of Death (ToD), show respawn windows, and post reminders when a window opens and closes.

---

## Contributing

Contributions welcome! To add a new project, open a pull request on [GitHub](https://github.com/haswelldev/awesome-l2) with the following two changes:

**1. Add an entry to the README**

Pick the appropriate section (`Desktop Apps`, `Web Tools`, or `Bots`) and add a line following this format:

```
- [Project Name](primary-url) — One sentence description. ([Download](download-url) / [Source](repo-url))
```

**2. Add an entry to the website**

Open `website/src/data/projects.js` and append an object to the `projects` array:

```js
{
  id: 'your-project-id',        // kebab-case, unique
  name: 'Your Project Name',
  description: 'One or two sentences describing what the tool does.',
  developer: 'YourName',
  type: 'desktop' | 'webapp' | 'bot',
  tags: ['Tag1', 'Tag2'],
  links: {
    repo: 'https://github.com/...',      // optional
    webapp: 'https://...',               // optional
    download: 'https://...',             // optional
    docker: 'https://...',               // optional
  },
},
```

At least one link is required. The card on the website will automatically show the correct buttons based on which links are provided.
