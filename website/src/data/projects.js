export const projects = [
  {
    id: 'reborn-easy-login-manager',
    name: 'EasyLoginManager',
    description:
      'A lightweight, cross-platform account manager for managing passwords on Lineage 2 Reborn. Supports Windows and Mac.',
    developer: 'Haswell',
    type: 'desktop',
    tags: ['Desktop App', 'Windows', 'Mac', 'Account Manager'],
    links: {
      repo: 'https://github.com/haswelldev/RebornEasyLoginManager',
      download: 'https://github.com/haswelldev/RebornEasyLoginManager/releases/latest',
    },
  },
  {
    id: 'midnight-calculator',
    name: 'Midnight Calculator',
    description:
      'Converts your current in-game time into real-world timestamps showing exactly when in-game midnight will occur throughout a chosen day.',
    developer: 'Haswell',
    type: 'webapp',
    tags: ['Web App', 'Calculator', 'Utility', 'Hellman', 'Zaken'],
    links: {
      repo: 'https://github.com/haswelldev/midnight',
      webapp: 'https://haswelldev.github.io/midnight/',
    },
  },
  {
    id: 'tod-bot',
    name: 'TOD Bot',
    description:
      'Lightweight Discord bot to record boss Time of Death (ToD), show respawn windows, and post reminders when a window opens and closes.',
    developer: 'Haswell',
    type: 'bot',
    tags: ['Discord Bot', 'Boss Tracker', 'Reminders', 'Time of Death'],
    links: {
      repo: 'https://github.com/haswelldev/tod-bot',
      docker: 'https://github.com/haswelldev/tod-bot/pkgs/container/tod-bot',
    },
  },
  {
    id: 'shared-timer',
    name: 'Shared Timer',
    description:
      'A shared real-time countdown. Open a room URL, share it with others, and everyone sees the same timer state — perfect for Destro-relog coordination.',
    developer: 'Knix',
    type: 'webapp',
    tags: ['Web App', 'Countdown', 'Relog', 'Coordination', 'Destro'],
    links: {
      repo: 'https://github.com/ChocoWhoopies/web-timer',
      webapp: 'https://knix.ovh/',
    },
  },
]

export const typeConfig = {
  desktop: { label: 'Desktop App', color: 'var(--tag-desktop)' },
  webapp: { label: 'Web App', color: 'var(--tag-webapp)' },
  bot: { label: 'Discord Bot', color: 'var(--tag-bot)' },
}
