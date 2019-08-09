import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

import Restaurant from '../types/Restaurant';
import PriceGroup from '../types/PriceGroup';

export default () => {
  const [restaurants, setRestaurants]: [Restaurant[], Function] = useState([]);

  const [loading, setLoading] = useState(false);

  const priceGroups = {
    '€': { symbol: '€', title: 'Cheap' } as PriceGroup,
    '€€': { symbol: '€€', title: 'Average' } as PriceGroup,
    '€€€': { symbol: '€€€', title: 'Premium' } as PriceGroup,
    '€€€€': { symbol: '€€€€', title: 'Deluxe' } as PriceGroup,
  };

  const fetchRestaurants = (searchText: string = null): void => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      yelp
        .get('businesses/search', { params: { term: searchText, latitude, longitude, limit: 50 } })
        .then(({ data }) => {
          setRestaurants([...data.businesses]);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    });
  };

  useEffect(fetchRestaurants, []); // [] run once on mount

  return [restaurants, fetchRestaurants, priceGroups, loading];
};
