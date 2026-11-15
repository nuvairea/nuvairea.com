import type { ImageMetadata } from 'astro';
import scribblyOffline from '../assets/scribbly-sync-offline.jpg';
import scribblySyncing from '../assets/scribbly-sync-syncing.jpg';
import scribblySynced from '../assets/scribbly-sync-synced.jpg';

export interface Heading {
  text: string;
  accent: string;
}

export interface Feature {
  icon: string;
  title: string;
  body: string;
}

export interface StudyShot {
  src: ImageMetadata;
  alt: string;
  label: string;
  caption: string;
}

export interface FlowStep {
  title: string;
  body: string;
}

export interface CaseStudy {
  role: string;
  product: string;
  why: {
    heading: Heading;
    paragraphs: string[];
    features: Feature[];
  };
  inside: {
    heading: Heading;
    intro: string;
    shots: StudyShot[];
  };
  build: {
    heading: Heading;
    intro: string;
    stack: string[];
    flow: FlowStep[];
  };
  cta: Heading;
}

const caseStudies: Record<string, CaseStudy> = {
  scribbly: {
    role: 'Design and development',
    product: 'Offline-first notes app (PWA)',
    why: {
      heading: { text: "Notes that don't ", accent: 'wait.' },
      paragraphs: [
        'Scribbly is local first. Every change is written to the device right away, so saving never waits on the network.',
        'Sync runs in the background and retries when the connection comes back.',
      ],
      features: [
        {
          icon: 'device-check',
          title: 'Saves locally first',
          body: 'Every note lands on your device before anything else happens.',
        },
        {
          icon: 'sync',
          title: 'Background sync',
          body: 'Changes reach the server without blocking the interface.',
        },
        {
          icon: 'install',
          title: 'Installable',
          body: 'Works as a PWA on desktop and phone.',
        },
        {
          icon: 'user',
          title: 'Google or guest',
          body: 'Sign in with Google to sync, or stay a guest. Guest mode never touches the network.',
        },
      ],
    },
    inside: {
      heading: { text: 'Quick to jot. ', accent: 'Easy to find.' },
      intro: 'Color-tagged cards, search, and filters for today, this week and this month. Keyboard shortcuts on desktop.',
      shots: [
        {
          src: scribblyOffline,
          alt: 'Note saved locally while offline',
          label: 'Offline',
          caption: 'Saved on the device',
        },
        {
          src: scribblySyncing,
          alt: 'Note syncing after reconnecting',
          label: 'Syncing',
          caption: 'Sending after reconnecting',
        },
        {
          src: scribblySynced,
          alt: 'Note synced with the server',
          label: 'Synced',
          caption: 'Confirmed by the server',
        },
      ],
    },
    build: {
      heading: { text: 'Local first. ', accent: 'Sync second.' },
      intro: 'A React and TypeScript client talks to a Node and Express API backed by MongoDB.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      flow: [
        { title: 'Write locally', body: 'The note saves to the device first, so the UI never waits.' },
        { title: 'Mark it pending', body: 'Until the server confirms it, the note is flagged as pending.' },
        { title: 'Sync in the background', body: 'The queue syncs without blocking the interface.' },
        {
          title: 'Retry, then flag',
          body: 'Offline retries are free. After 5 real errors the note is flagged and tried again next launch.',
        },
      ],
    },
    cta: { text: 'Open it. Then read ', accent: 'the code.' },
  },
};

export default caseStudies;
