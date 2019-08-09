import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

import Restaurant from '../types/Restaurant';

export default () => {
  const [restaurants, setRestaurants]: [Restaurant[], Function] = useState([]);

  const fetchRestaurants = (searchText: string = null): void => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      yelp
        .get('businesses/search', { params: { term: searchText, latitude, longitude, limit: 50 } })
        .then(({ data }) => {
          setRestaurants([...data.businesses]);
        })
        .catch(error => {
          console.error(error);
        });
    });
  };

  useEffect(fetchRestaurants, []); // [] run once on mount

  return [restaurants, fetchRestaurants];
};
