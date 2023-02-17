import { Image } from 'react-native';
import { styled } from '@dank-style/react';

// const sizes = {
//   '2xs': {
//     style: {
//       w: '$6',
//       h: '$6',
//     },
//   },
//   'xs': '10',
//   'sm': '16',
//   'md': '20',
//   'lg': '24',
//   'xl': '32',
//   '2xl': '64',
//   'full': '100%',
// };
export default styled(
  Image,
  {
    maxWidth: '100%',

    variants: {
      size: {
        '2xs': {
          w: '$6',
          h: '$6',
        },

        'xs': {
          w: '$10',
          h: '$10',
        },

        'sm': {
          w: '$16',
          h: '$16',
        },

        'md': {
          w: '$20',
          h: '$20',
        },

        'lg': {
          w: '$24',
          h: '$24',
        },

        'xl': {
          w: '$32',
          h: '$32',
        },

        '2xl': {
          w: '$64',
          h: '$64',
        },

        'full': {
          w: '100%',
          h: '100%',
        },
      },
    },
  },
  {}
);
