import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Restaurant from '../types/Restaurant';

const RestaurantWidget = ({ restaurant }: { restaurant: Restaurant }) => {
  const coverUrl = restaurant.image_url || 'https://via.placeholder.com/1000x1000.png?text=' + restaurant.name;

  return (
    <View style={styles.wrap}>
      <Image style={styles.photo} source={{ uri: coverUrl }} />
      <View style={styles.nameWrap}>
        <Text style={styles.nameText}>{restaurant.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    margin: 10,
    fontSize: 16,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 5,
  },
  photo: {
    flex: 1,
    aspectRatio: 1.75,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  nameWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 5,
    borderBottomEndRadius: 0,
  },
  nameText: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default RestaurantWidget;
