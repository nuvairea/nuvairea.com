import type { ImageMetadata } from 'astro';
import scribblyMain from '../assets/scribbly.png';
import hooktailMain from '../assets/hooktail.png';
import loomMain from '../assets/loom.png';

export type IconName = 'external' | 'github';

export interface Shot {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  screenshot: Shot;
  description: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
  caseStudyUrl?: string;
}

const projects: Project[] = [
  {
    slug: 'scribbly',
    name: 'Scribbly',
    screenshot: {
      src: scribblyMain,
      alt: 'Scribbly notes screen with colored note cards, search and filters',
    },
    description:
      'An offline-first notes app. Notes save on your device first and sync in the background, retrying if the connection drops.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://scribbly-app.onrender.com',
    codeUrl: 'https://github.com/nuvairea/scribbly',
    caseStudyUrl: '/projects/scribbly/',
  },
  {
    slug: 'hooktail',
    name: 'Hooktail',
    screenshot: {
      src: hooktailMain,
      alt: 'Hooktail request inspector with a list of incoming requests and a detail pane',
    },
    description:
      'A request bin for debugging webhooks. Every visit gets its own bin and URL, requests show up live, and everything expires after 24 hours.',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Tailwind'],
    liveUrl: 'https://hooktail.vercel.app',
    codeUrl: 'https://github.com/nuvairea/hooktail',
    caseStudyUrl: '/projects/hooktail/',
  },
];

export interface AlsoBuilt {
  name: string;
  screenshot: Shot;
  description: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
}

export const alsoBuilt: AlsoBuilt = {
  name: 'Loom',
  screenshot: {
    src: loomMain,
    alt: 'Loom moodboard with animal photos in a masonry grid',
  },
  description:
    'A moodboard maker. Paste a link or upload images, drag them into place, and export any board as a PNG. Everything saves on your device.',
  stack: ['JavaScript', 'IndexedDB', 'Muuri'],
  liveUrl: 'https://nuvairea.github.io/loom/',
  codeUrl: 'https://github.com/nuvairea/loom',
};

export default projects;
