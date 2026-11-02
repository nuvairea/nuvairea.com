import type { ImageMetadata } from 'astro';
import scribblyMain from '../assets/scribbly.png';

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
      "A full-stack notes app with offline support, Google sign-in, and PWA install. Notes save on your device first and sync in the background, retrying automatically if the connection drops.",
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://scribbly-app.onrender.com',
    codeUrl: 'https://github.com/nuvairea/scribbly',
  },
];

export default projects;
