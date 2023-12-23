module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headings: {
          dark: '#0B434B', // replace with your actual color code
          light: '#FFFFFF',
        },
        body: {
          dark: '#1A555D',
          light: '#FAFAFA',
        },
        backgrounds: {
          white: '#ffffff',
          wisdomWhite: '#EDE6D8',
          darkGreenBlue: '#0B4149',
          lightGreenBlue: '#DCFBFF',
          greenGradient: {
            DEFAULT: '#1C7337', // Gradient start color
            end: '#248E45', // Gradient end color
          },
        },
        highlighted: {
          green: '#259D4A',
          orange: '#EE9B4E',
        },
      },
    },
  },
  plugins: [],
};