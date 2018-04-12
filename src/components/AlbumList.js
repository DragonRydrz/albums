import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    console.log('component will mount');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map(album => (
          <AlbumDetail key={album.title} album={album} />
        ))}
      </ScrollView>
    );
  }
}

export default AlbumList;
