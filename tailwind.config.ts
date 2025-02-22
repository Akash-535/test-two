import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black':"#010101",
        'custom-pink':"#DF2BFF",
        'custom-sky-blue':"#00B7FF",
        'custom-blue':"#407BFF"
      },
    },
  },
  plugins: [],
} satisfies Config;
