import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: { bg: '$primary600', borderRadius: 999, h: '$2' },
      // descendants: {
      //   _progressbar: {
      //     h: '$3',
      //   },
      // },
    },
  },
  {},
  config
);
