/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            dDbg: '#1c1d26',
            dBg: '#282a36',
            dOffBg: '#44475a',
            dWhite: '#f8f8f2',
            dBlue: '#6272a4',
            dCyan: '#8be9fd',
            dGreen: '#50fa7b',
            dOrange: '#ffb86c',
            dPink: '#ff79c6',
            dPurple: '#bd93f9',
            dRed: '#ff5555',
            dYellow: '#f1fa8c'
         },
         fontFamily: {
            varela: ["Varela", "sans-serif"]
         }
      },
   },
   plugins: [],
}
