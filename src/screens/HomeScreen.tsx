import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const HomeScreen = props => {
  const [searchText, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const handleSearchChange = text => {
    setSearch(text);
  };

  const handleSearchSubmit = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      yelp.get('businesses/search', { params: { term: searchText, latitude, longitude } })
        .then(({data}) => {
          setRestaurants([ ...data.businesses ]);
        })
        .catch(error => {
          console.error(error);
        })
    });
  };

  return (
    <ScrollView>
      <SearchBar text={searchText} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      <Text>Restaurants: ({restaurants.length})</Text>
      {restaurants.map(r => <Text>{r.name}</Text>)}
    </ScrollView>
  );
};

export default HomeScreen;
