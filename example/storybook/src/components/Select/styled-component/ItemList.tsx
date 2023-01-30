import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    fontSize: 12,
    color: '$text500',

    _dark: {
      color: '$text50',
    },
  },
  { ancestorStyle: ['_itemList'] }
);