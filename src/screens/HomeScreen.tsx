import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import useYelpRestaurants from '../hooks/useYelpRestaurants';

import Restaurant from '../types/Restaurant';
import PriceGroup from '../types/PriceGroup';

import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';

const HomeScreen = props => {
  const [searchText, setSearch] = useState('');
  const [restaurants, fetchRestaurants, priceGroups, loading]: any = useYelpRestaurants();

  const handleSearchSubmit = () => {
    fetchRestaurants(searchText);
  };

  const restaurantsCount = () => {
    const priceKeys: string[] = Object.keys(priceGroups);
    const rests = restaurants.filter((r: Restaurant) => priceKeys.includes(r.price));
    return rests.length;
  };

  const renderLoading = () => <Text style={styles.loading}>Loading...</Text>;

  const renderResults = () => (
    <>
      <Text style={styles.infosBar}>Found {restaurantsCount()} restaurants:</Text>
      <ScrollView>
        {Object.values(priceGroups).map((pg: PriceGroup) => (
          <RestaurantsList key={pg.symbol} title={pg.symbol + ' - ' + pg.title} restaurants={restaurants.filter((r: Restaurant) => r.price === pg.symbol)} />
        ))}
      </ScrollView>
    </>
  );

  return (
    <View style={styles.chrome}>
      <SearchBar text={searchText} onChange={setSearch} onSubmit={handleSearchSubmit} />
      {loading ? renderLoading() : renderResults()}
    </View>
  );
};

const styles = StyleSheet.create({
  chrome: {
    flex: 1,
  },
  infosBar: {
    marginVertical: 3,
    marginHorizontal: 15,
    fontSize: 12,
  },
  loading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 50,
    textAlign: 'center',
  },
});

export default HomeScreen;
