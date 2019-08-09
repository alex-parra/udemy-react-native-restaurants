import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import RestaurantWidget from './RestaurantWidget';
import Restaurant from '../types/restaurant';

const RestaurantsList = ({ title, restaurants }) => {
  const [mainTitle, subTitle] = title.split(' - ');
  return (
    <View style={styles.wrap}>
      <View style={styles.titleWrap}>
        <View style={styles.titles}>
          <Text style={styles.mainTitle}>{mainTitle}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <Text style={styles.count}>Found: {restaurants.length}</Text>
      </View>
      {restaurants.length === 0 && <Text style={styles.noResults}>No results to show.</Text>}
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={restaurants} keyExtractor={item => item.id} renderItem={({ item }: { item: Restaurant }) => <RestaurantWidget restaurant={item} />} />
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
  titles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#999',
    fontWeight: 'normal',
  },
  count: {
    fontSize: 12,
    color: '#999',
  },
  noResults: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 50,
  },
});

export default RestaurantsList;
