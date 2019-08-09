import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Restaurants',
    },
  }
);

export default createAppContainer(navigator);
