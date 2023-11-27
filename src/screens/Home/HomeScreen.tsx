import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/navigation-types';
import {CustomButton} from '../../components/Button';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerText}>Choose your screen</Text>
      <View style={styles.btnContainer}>
        <CustomButton
          title="Go to GIF Screen"
          onPress={() => navigation.navigate('GifScreen', {})}
        />
        <View style={styles.spacing} />
        <CustomButton
          title="Go to Feedback Screen"
          onPress={() => navigation.navigate('FeedbackScreen', {})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    alignItems: 'center',
  },
  spacing: {
    marginTop: 10,
  },
});
