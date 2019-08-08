import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';

const HomeScreen = props => {
  const [searchText, setSearch] = useState('');

  const handleSearchChange = text => {
    setSearch(text);
  };

  const handleSearchSubmit = () => {
    console.log('TODO: search yelp');
  };

  return (
    <ScrollView>
      <SearchBar text={searchText} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
    </ScrollView>
  );
};

export default HomeScreen;
