import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
        extend: {
          fontFamily: {
            'ambrose-light': '"Ambrose Light"',
            'ambrose-std': '"Ambrose Std"',
            'ed-market':'eds-market-main-script',
            'canada-type-gibson':'canada-type-gibson',
          },
          colors: {
            'wedding-barn-red': "#782f40",
          }
        },
      },
  preflight: {
    // Declare font face
    '@font-face': [
      {
        fontFamily: 'Ambrose Light',
        fontWeight: '800',
        src: 'url(/static/fonts/Ambroise_Light_Regular) format("otf")',
      },
      {
        fontFamily: 'Ambrose Std',
        fontWeight: '500',
        src: 'url(static/fonts/Ambroise_Light_Regular) format("otf")',
      },
    ],
  },
} as Options;
