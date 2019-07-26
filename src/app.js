/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { getRootNavigator } from './navigator'
import createStore from './state/create-store'

const store = createStore({});

const App = () => {
  const RootNavigator = getRootNavigator()
  const AppContainer = createAppContainer(RootNavigator)

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
