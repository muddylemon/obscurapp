import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.mainContainer,
    height: '100%'
  },
  closeButton: {
    position: 'absolute',
    top: Metrics.doubleBaseMargin,
    right: Metrics.baseMargin,
    zIndex: 9999
  }
})
