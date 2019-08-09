import axios from 'axios';
import appConfig from '../../app.config';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {
    Authorization: `Bearer ${appConfig.yelpApiKey}`,
  },
});
