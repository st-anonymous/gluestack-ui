import React from 'react';
// import { Button } from '@gluestack/design-system';
// import { Center } from '@gluestack/design-system';
import Wrapper from '../Wrapper';
import { Pressable, Text } from 'react-native';
import Root from '../styled-components/actionsheet/Root';
import Content from '../styled-components/actionsheet/Content';
import Item from '../styled-components/actionsheet/Item';
import ItemText from '../styled-components/actionsheet/ItemText';
import DragIndicator from '../styled-components/actionsheet/DragIndicator';
import IndicatorWrapper from '../styled-components/actionsheet/IndicatorWrapper';
import Backdrop from '../styled-components/actionsheet/Backdrop';
import { createActionsheet } from '@universa11y/actionsheet';

export const Actionsheet: any = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
});

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Wrapper>
      {/* <Center> */}
      <Pressable onPress={handleClose}>
        <Text>Open</Text>
      </Pressable>
      {/* </Center> */}
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        {/* @ts-ignore */}
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>

          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}} isDisabled>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
}

export default ActionsheetExample;

// export { Button, Center, Box } from '@gluestack/ui-compiled';