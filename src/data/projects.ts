import type { ImageMetadata } from 'astro';
import scribblyMain from '../assets/main.png';
import scribblyOffline from '../assets/sync-offline.jpg';
import scribblySyncing from '../assets/sync-syncing.jpg';
import scribblySynced from '../assets/sync-synced.jpg';

export type IconName = 'external' | 'github' | 'info' | 'offline' | 'login' | 'phone' | 'trash';

export interface Shot {
  src: ImageMetadata;
  alt: string;
}

export interface ProjectDetails {
  screenshot: Shot;
  facts: { label: string; value: string }[];
  features: { icon: IconName; title: string; text: string }[];
  sync: {
    title: string;
    text: string;
    shots: (Shot & { label: string })[];
  };
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  pills: { label: string; live?: boolean }[];
  description: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
  details: ProjectDetails;
}

const projects: Project[] = [
  {
    slug: 'scribbly',
    name: 'Scribbly',
    tagline: 'Offline-first notes',
    pills: [{ label: 'Live', live: true }, { label: 'Free' }],
    description:
      "A fast workspace for capturing ideas without getting in your way. Notes save to the server when you're online and to your device when you're not, then sync on reconnect.",
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://scribbly-app.onrender.com',
    codeUrl: 'https://github.com/nuvairea/scribbly',
    details: {
      screenshot: {
        src: scribblyMain,
        alt: 'Scribbly notes screen with colored note cards, search and filters',
      },
      facts: [
        { label: 'Role', value: 'Creator and developer' },
        { label: 'Product', value: 'Notes and quick capture' },
      ],
      features: [
        { icon: 'offline', title: 'Writes offline', text: 'Notes save on your device first and sync later.' },
        { icon: 'login', title: 'Sign in or skip it', text: 'Google login, or guest mode with no network.' },
        { icon: 'phone', title: 'Installs as an app', text: 'A PWA that works offline, with light and dark themes.' },
        { icon: 'trash', title: 'Trash and export', text: 'Recover deleted notes, export everything as JSON.' },
      ],
      sync: {
        title: 'Local first, server second',
        text: "Every change is written locally right away, so the UI never waits on the network. When you're signed in, changes sync in the background, failed requests retry, and after 5 attempts the note is flagged as a sync error.",
        shots: [
          { src: scribblyOffline, alt: 'Note saved locally while offline', label: 'Offline' },
          { src: scribblySyncing, alt: 'Note syncing after reconnecting', label: 'Syncing' },
          { src: scribblySynced, alt: 'Note synced with the server', label: 'Synced' },
        ],
      },
    },
  },
];

export default projects;
