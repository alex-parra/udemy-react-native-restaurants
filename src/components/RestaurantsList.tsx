import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import RestaurantWidget from './RestaurantWidget';
import Restaurant from '../types/restaurant';

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>Found: {restaurants.length}</Text>
      </View>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }: { item: Restaurant }) => <RestaurantWidget restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 20,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  count: {
    fontSize: 12,
    color: '#999',
  },
  list: {
    //height: 180,
  },
});

export default RestaurantsList;
