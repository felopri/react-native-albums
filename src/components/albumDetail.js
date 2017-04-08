import React from 'react';
import { Text } from 'react-native';

const AlbumDetail = (props) => (
  <View>
    <Text>Title: {props.album.title}</Text>
  </View>
);

export default AlbumDetail;
