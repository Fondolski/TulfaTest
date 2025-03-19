import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        keyframes: {
          gradient: {
            '0%': { backgroundPosition: '0% 50%'  },
            
            '100%': { backgroundPosition: '100% 50%' },
          },
        },
        
        animation: {
          gradient: 'gradient 6s linear infinite',
        },
      },
      
    },
  }

  export default config