/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#F7416D',
        'secondary':'#2B3F6C',
        'warning': '#FF8000',
        'info': '#189FF2',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        iranYekanThin: "IranYekanFaNum-Thin",
        iranYekanLight: "IranYekanFaNum-Light",
        iranYekanRegular: "IranYekanFaNum-Regular",
        iranYekanMedium: "IranYekanFaNum-Medium",
        iranYekanSemiBold: "IranYekanFaNum-SemiBold",
        iranYekanBold: "IranYekanFaNum-Bold",
        iranYekanExtraBold: "IranYekanFaNum-ExtraBold",
        iranYekanBlack: "IranYekanFaNum-Black",
        iranYekanExtraBlack: "IranYekanFaNum-ExtraBlack",
      },
      padding:{
        'custom':'calc((100% - 1392px) / 2)'
       },
      maxWidth:{
        'content':'1450px',
      },
    }
},
}

