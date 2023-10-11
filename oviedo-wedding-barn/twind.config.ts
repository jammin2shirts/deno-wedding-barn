import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      listStyleType: {
        square:'square',
      },
      fontFamily: {
        "ambroise-std": "ambroise-std",
        "ambroise-firmin-std": "ambroise-firmin-std",
        "ambroise-francois-std": "ambroise-francois-std",
        "ed-market": "eds-market-main-script",
        "canada-type-gibson": "canada-type-gibson",
        "beloved-script":"beloved-script",
      },
      colors: {
        "wedding-barn-red": "#782f40",
        "soft-red": "#990033",
      },
      height: {
        "100": "26rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "appear-t": {
          "0%": { opacity: "0", transform: "translate(0,-10px)" },
          "100%": { opacity: "1", transform: "translate(0,0)" },
        },
        "appear-l": {
          "0%": { opacity: "0", transform: "translate(50%,-100px)" },
          "100%": { opacity: "1", transform: "translate(0,0)" },
        },
      },
      animation: {
        // wiggle: "wiggle 1s ease-in-out infinite",
        appear: "appear-t .75s ",
      },
    },
  },
} as Options;
