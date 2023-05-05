import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
        extend: {
          fontFamily: {
            'ambroise-std': 'ambroise-std',
            'ambroise-firmin-std': 'ambroise-firmin-std',
            'ambroise-francois-std': 'ambroise-francois-std',
            'ed-market':'eds-market-main-script',
            'canada-type-gibson':'canada-type-gibson',
          },
          colors: {
            'wedding-barn-red': "#782f40",
            'soft-red': "#990033"
          },
          height:{
            '100':'26rem'
          }
        },
      },
} as Options;
