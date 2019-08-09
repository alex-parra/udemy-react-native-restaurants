import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import yelp from '../api/yelp';
import Restaurant from '../types/Restaurant';

const RestaurantScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined);
  const restaurantId: string = navigation.getParam('id', 'NO-ID');

  const fetchRestaurant = restId => {
    yelp
      .get('businesses/' + restId)
      .then(({ data }) => {
        setRestaurant({ ...data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => fetchRestaurant(restaurantId), []);

  return (
    <View>
      {restaurant === undefined ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <>
          <Image style={styles.cover} source={{ uri: restaurant.image_url }} />
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.infos}>
            <Text style={styles.infoTxt}>Rating: {restaurant.rating}</Text>
            <Text style={styles.infoTxt}>Reviews: {restaurant.review_count}</Text>
            <Text style={styles.infoTxt}>
              Location: {restaurant.location.city}, {restaurant.location.country}
            </Text>
            <Text style={styles.infoTxt}>Phone: {restaurant.display_phone}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 50,
    textAlign: 'center',
  },
  cover: {
    width: '100%',
    aspectRatio: 1.75,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  infos: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  infoTxt: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
});

export default RestaurantScreen;
