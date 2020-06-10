import React from 'react';
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import store from './src/redux'
import HomeScreen from './src/screens/HomeScreen';
import ChampionScreen from './src/screens/ChampionScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Champion" component={ChampionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
