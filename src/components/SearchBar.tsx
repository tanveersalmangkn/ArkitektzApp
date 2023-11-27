import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  onClear: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onSearch,
  onClear,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        placeholder="Search your fav Gif"
        onChangeText={text => onChangeText(text)}
        style={styles.inputStyle}
      />
      {value ? (
        <Button title="Clear" onPress={onClear} />
      ) : (
        <Button title="Search" onPress={onSearch} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: 'white',
    height: 40,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    flex: 1,
  },
});
