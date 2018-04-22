import Expo from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import DetailScreen from './screens/DetailScreen';
import LocateScreen from './screens/LocateScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      home: { screen: HomeScreen },
      scan: { screen: ScanScreen },
      detail: { screen: DetailScreen },
      locate: { screen: LocateScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
