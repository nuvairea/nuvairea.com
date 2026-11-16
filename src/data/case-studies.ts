import type { ImageMetadata } from 'astro';
import scribblyOffline from '../assets/scribbly-sync-offline.jpg';
import scribblySyncing from '../assets/scribbly-sync-syncing.jpg';
import scribblySynced from '../assets/scribbly-sync-synced.jpg';
import hooktailBin from '../assets/hooktail-bin.png';
import hooktailRequest from '../assets/hooktail-request.png';

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
  inside?: {
    heading: Heading;
    intro: string;
    layout: 'portrait' | 'wide';
    shots: StudyShot[];
  };
  build: {
    heading: Heading;
    intro: string;
    stack: string[];
    flowLabel: string;
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
      heading: { text: 'Offline. Syncing. ', accent: 'Synced.' },
      intro: 'Color-tagged cards, search, and filters for today, this week and this month. Keyboard shortcuts on desktop.',
      layout: 'portrait',
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
      flowLabel: 'Sync flow',
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
  hooktail: {
    role: 'Design and development',
    product: 'Webhook request bin',
    why: {
      heading: { text: 'See what the webhook ', accent: 'actually sent.' },
      paragraphs: [
        'When a webhook misbehaves, you need the exact request: the method, the headers and the body. Hooktail gives you a URL that catches anything sent to it and shows it to you.',
        'Open the site and you get a bin with its own URL. No account, nothing to set up.',
      ],
      features: [
        {
          icon: 'link',
          title: 'A URL per visit',
          body: 'Each visit creates a bin with a random id and its own URL.',
        },
        {
          icon: 'sync',
          title: 'Live view',
          body: 'The page refreshes automatically to show new requests as they arrive.',
        },
        {
          icon: 'clock',
          title: 'Gone in 24 hours',
          body: 'Bins expire after a day, and expired ones are deleted whenever a new bin is created.',
        },
        {
          icon: 'shield',
          title: 'Built-in limits',
          body: 'Body size, requests per bin and new bins per IP are all capped, since there are no accounts.',
        },
      ],
    },
    inside: {
      heading: { text: 'Send it. ', accent: 'Inspect it.' },
      intro: 'Every bin starts empty with a curl command ready to copy. Open a request to see its body, headers and query.',
      layout: 'wide',
      shots: [
        {
          src: hooktailBin,
          alt: 'Hooktail with an empty bin and a curl command',
          label: 'Empty bin',
          caption: 'A URL and a curl command, ready to copy',
        },
        {
          src: hooktailRequest,
          alt: 'Hooktail request detail with body, headers and query tabs',
          label: 'Request',
          caption: 'Body, headers and query for each request',
        },
      ],
    },
    build: {
      heading: { text: 'Two URLs. ', accent: 'One bin.' },
      intro: 'A Next.js app with Postgres on Neon, deployed on Vercel.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'Postgres', 'Neon', 'Vercel'],
      flowLabel: 'Request flow',
      flow: [
        { title: 'Create a bin', body: 'Opening the site creates a bin with a random id.' },
        { title: 'Capture', body: 'Anything sent to the bin URL is stored against that bin.' },
        {
          title: 'Inspect',
          body: 'A separate page shows the bin. The two URLs are split because a browser and a curl GET look the same to the server.',
        },
        { title: 'Expire', body: 'After 24 hours the bin is deleted.' },
      ],
    },
    cta: { text: 'Send it a request. Then read ', accent: 'the code.' },
  },
};

export default caseStudies;
