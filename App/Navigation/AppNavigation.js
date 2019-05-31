import { createStackNavigator, createAppContainer } from 'react-navigation'
import HelpScreen from '../Containers/HelpScreen'
import ViewerScreen from '../Containers/ViewerScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    ViewerScreen: { screen: ViewerScreen },
    LaunchScreen: { screen: LaunchScreen },
    HelpScreen: { screen: HelpScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default createAppContainer(PrimaryNav)
