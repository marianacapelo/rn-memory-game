import { createStackNavigator } from 'react-navigation'
import Welcome from '../screens/welcome'

export const getRootNavigator = () =>
  createStackNavigator(
    {
      // Initial screen
      Welcome: { screen: Welcome },
    },
    {
      initialRouteName: 'Welcome'
    }
  )