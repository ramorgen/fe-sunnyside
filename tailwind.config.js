module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      screens: {
         md: "768px",
         lg: "1060px",
         xl: "1100px",
      },
      fontSize: {
         f11: ".687rem",
         f12: ".75rem",
         f13: ".812rem",
         f14: ".875rem",
         f15: ".937rem",
         f16: "1rem",
         f18: "1.125rem",
         f20: "1.25rem",
         f24: "1.50rem",
         f32: "2.0rem",
      },
      extend: {
         fontFamily: {
            barlow: "Barlow",
            fraunces: "Fraunces",
         },
         boxShadow: {
            custom: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
         },
         colors: {
            red: "#fc4747",
            gray: "#5a698f",
            dark: "#10141e",
            semi_dark: "#161d2f",
            not_active: "#5A698F",
         },
      },
   },
   plugins: [
      //  require('@tailwindcss/forms')({
      //    strategy: 'base', // only generate global styles
      //  }),
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/line-clamp'),
      // require('@tailwindcss/aspect-ratio')
   ],
}
