import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import useYelpRestaurants from '../hooks/useYelpRestaurants';

import Restaurant from '../types/Restaurant';

import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';
import RestaurantWidget from '../components/RestaurantWidget';

const HomeScreen = props => {
  const [searchText, setSearch] = useState('');
  const [restaurants, fetchRestaurants]: any = useYelpRestaurants();

  const handleSearchSubmit = () => {
    fetchRestaurants(searchText);
  };

  return (
    <View>
      <SearchBar text={searchText} onChange={setSearch} onSubmit={handleSearchSubmit} />
      <Text style={styles.infosBar}>Restaurants: {restaurants.length}</Text>
      <ScrollView>
        <RestaurantsList title="€ - Cheap" restaurants={restaurants.filter((r: Restaurant) => r.price === '€')} />
        <RestaurantsList title="€€ - Average" restaurants={restaurants.filter((r: Restaurant) => r.price === '€€')} />
        <RestaurantsList title="€€€ - Deluxe" restaurants={restaurants.filter((r: Restaurant) => r.price === '€€€')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  infosBar: {
    marginVertical: 3,
    marginHorizontal: 15,
    fontSize: 12,
  },
});

export default HomeScreen;
