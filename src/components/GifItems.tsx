import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

type Gif = {
  id: string;
  url: string;
  type: string;
  title: string;
};

export const GifItem: React.FC<{item: Gif; testID?: string}> = ({
  item,
  testID,
}) => {
  const imageUrl = `https://media.giphy.com/media/${item?.id}/giphy.${item?.type}`;

  return (
    <View style={styles.cardStyle} testID={testID}>
      <Image
        testID="gif-image"
        source={{uri: imageUrl}}
        style={styles.imgStyle}
      />
      <Text style={styles.textStyle}>{item?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {margin: 10, backgroundColor: 'white', borderRadius: 10},
  imgStyle: {height: 300, width: '100%', zIndex: 1},
  textStyle: {textAlign: 'center', padding: 15},
});
