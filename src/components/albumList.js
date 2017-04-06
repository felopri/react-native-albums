// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

//Create the component
class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount again');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album list</Text>
      </View>
    );
  }
}

//Make the component available in other parts of the App
export default AlbumList;
