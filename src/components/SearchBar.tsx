import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ text, onChange, onSubmit }) => {
  return (
    <View style={styles.wrap}>
      <Feather style={styles.icon} name="search" />
      <TextInput value={text} onChangeText={onChange} onEndEditing={onSubmit} style={styles.input} placeholder="Search..." autoCapitalize="none" autoCorrect={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 0,
    fontSize: 15,
    color: '#888',
    position: 'absolute',
    width: 40,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    paddingTop: 12,
    paddingLeft: 40,
    fontSize: 16,
  },
});

export default SearchBar;
