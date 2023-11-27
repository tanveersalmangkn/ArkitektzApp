import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';

type StarRatingProps = {
  value: number;
  onChange: (value: number) => void;
  error?: string | undefined | false;
};

export const StarComponent: React.FC<StarRatingProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <View>
      <Text>Rating</Text>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={40}
        showRating
        startingValue={value}
        onFinishRating={onChange}
        tintColor="#F2F2F2"
      />
      {error && <Text style={styles.errText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  errText: {color: 'red'},
});
