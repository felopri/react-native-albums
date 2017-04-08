import React from 'react';
import { Text, View } from 'react-native';

const Card = (props) => (
  <View>
    <Text>Title: {props.album.title}</Text>
  </View>
);

export default Card;
