// @ts-nocheck
import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
// @ts-ignore
import { AddIcon } from '@gluestack/design-system';
import { Button } from '@gluestack/design-system';
import { VStack } from '@gluestack/design-system';
import { Center } from '@gluestack/design-system';

import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonSizesExample: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg'];
  return (
    <Wrapper>
      <Center>
        <VStack space="md" justifyContent="center" alignItems="center">
          {sizes.map((size) => {
            return (
              <Button mt="$4" size={size} key={size}>
                <Button.Text>Button</Button.Text>
                <AddIcon ml="$2" size="$sm" color="$white" />
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};