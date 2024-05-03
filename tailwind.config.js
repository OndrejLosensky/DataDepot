/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        handlee: ['Handlee', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        freeman: ['Freeman', 'sans-serif']
      },
      dropShadow: {
        glow: [
          "0 0px 8px rgba(64,210, 235, 0.25)",
          "0 0px 8px rgba(64, 235,183, 0.25)"
        ],
        glow2:
        [
          "0px 0px 16px rgba(220,50, 222, 0.45)",
        ]
      },
      colors: {
        'custom-pink': '#ff63c3',
        'custom-purple': '#8e5de2',
        'custom-indigo': '#4f46e5',
        'custom-blue': '#0070f3',
        'aquamarine': {
          '50': '#f0fdf9',
          '100': '#ccfbed',
          '200': '#98f7dc',
          '300': '#72eecf',
          '400': '#2bd6b0',
          '500': '#12ba97',
          '600': '#0c957c',
          '700': '#0e7765',
          '800': '#105f53',
          '900': '#124f45',
          '950': '#042f2a',
      },
      
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/forms")({
      strategy: 'base',
      strategy: 'class', 
    }),
    require("@tailwindcss/typography"),
  ],
};
