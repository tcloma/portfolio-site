export interface IProjData {
   title: string,
   stack: string[],
   description: string,
   previewLink: string,
   githubLink: string,
   demoLink: string
}

export const projectData: Array<IProjData> = [
   {
      title: 'Hover Note',
      stack: ['TypeScript', 'React', 'Electron', 'Nodejs', 'ChakraUI'],
      description: 'Hover Note is a markdown sticky notes application designed to provide a more comprehensive and extensible experience when taking and referencing notes',
      previewLink: '/images/previews/hover-preview.png',
      githubLink: 'https://github.com/tcloma/Hover-Note-FIS',
      demoLink: 'https://www.youtube.com/watch?v=2RcohOtbrgM&t=6s'
   },
   {
      title: 'Flypto Crypto',
      stack: ['JavaScript', 'React', 'Ruby', 'Rails', 'SASS', 'sqlite'],
      description: 'A mock crypto trading platform built on the idea of simplicity and transparency, with up to date prices & visualized currencry graphs',
      previewLink: '/images/previews/flypto-preview.png',
      githubLink: 'https://github.com/tcloma/Flypto-Crypto-FIS',
      demoLink: 'https://www.youtube.com/watch?v=YbXkZPx_kL4'
   },
   {
      title: 'Cosmo Quizzer',
      stack: ['JavaScript', 'React', 'Firebase', 'SASS'],
      description: 'A thematic quiz game where your role is to test the knowledge of different species throughout your galaxy in JavaScript and React.js programming!',
      previewLink: '/images/previews/cosmo-quizzer-preview.png',
      githubLink: 'https://github.com/tcloma/Cosmo-Quizzer-FIS',
      demoLink: ''
   },
   {
      title: 'Kaijugochi',
      stack: ['TypeScript', 'Nodejs', 'Express'],
      description: 'A simple browser game where you can create your own monster and care for it by feeding it other monsters that appear on screen',
      previewLink: '/images/previews/kaijugochi-preview.png',
      githubLink: 'https://github.com/tcloma/Monster-Game-FIS',
      demoLink: ''
   },
]

export const techStack: Array<string> = [
   'javascript',
   'typescript',
   'react',
   'sass',
   'nodejs',
   'express',
   'ruby',
   'rails',
   'firebase',
   'sqlite',
   'electron',
]