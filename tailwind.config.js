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
      dropShadow: {
        glow: [
          "0 0px 35px rgba(255,255, 255, 0.25)",
          "0 0px 55px rgba(255, 255,255, 0.15)"
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
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/forms")({
      strategy: 'base',
      strategy: 'class', 
    }),
  ],
};
