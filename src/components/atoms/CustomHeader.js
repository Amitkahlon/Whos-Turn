import React from 'react';
import {
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
  View,
  Text,
  Subtitle,
} from 'old-native-base';

const CustomHeader = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const subTitle =
    options.headSubtitle !== undefined
      ? options.headSubtitle
      : options.subtitle !== undefined
      ? options.subtitle
      : undefined;

  return (
    <Header>
      <Left>
        {previous ? (
          <Button transparent onPress={navigation.goBack}>
            <Icon name="arrow-back" />
          </Button>
        ) : undefined}
      </Left>
      <Body>
        <Title>{title}</Title>
        {subTitle ? <Subtitle>{subTitle}</Subtitle> : undefined}
      </Body>
    </Header>
  );
};

export default CustomHeader;
