// Import a library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

//Create the component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount again');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      console.log('Response:', response);
      return this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View style={styles}>
        {this.renderAlbums()}
      </View>
    );
  }
}

const styles = {
    paddingTop: 8
};

//Make the component available in other parts of the App
export default AlbumList;
