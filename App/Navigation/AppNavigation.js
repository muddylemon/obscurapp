import { createStackNavigator, createAppContainer } from 'react-navigation'
import SelectedPhoto from '../Containers/SelectedPhoto'
import HomeScreen from '../Containers/HomeScreen'
import ViewerScreen from '../Containers/ViewerScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SelectedPhoto: { screen: SelectedPhoto },
  HomeScreen: { screen: HomeScreen },
  ViewerScreen: { screen: ViewerScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
