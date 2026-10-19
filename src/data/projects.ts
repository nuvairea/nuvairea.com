export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  tagline: string;
  pills: { label: string; live?: boolean }[];
  description: string;
  stack: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    name: 'Scribbly',
    tagline: 'Offline-first notes',
    pills: [{ label: 'Live', live: true }, { label: 'Free' }],
    description:
      "A fast workspace for capturing ideas without getting in your way. Notes save to the server when you're online and to your device when you're not, then sync on reconnect.",
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    links: [
      { label: 'Live app', href: 'https://scribbly-app.onrender.com' },
      { label: 'Frontend repo', href: 'https://github.com/nuvairea/scribbly' },
      { label: 'Backend repo', href: 'https://github.com/nuvairea/scribbly-server' },
    ],
  },
];

export default projects;
