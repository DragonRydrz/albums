import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

const AlbumDetail = ({ album }) => {
  const { artist, title, thumbnail_image } = album;
  const { headerContentStyle, thumbnailStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title} </Text>
          <Text>{artist} </Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
};

export default AlbumDetail;
