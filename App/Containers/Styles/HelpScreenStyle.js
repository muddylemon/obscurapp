import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex: 1,
    backgroundColor: Colors.silver,
  },
  closeButton: {
    position: 'absolute',
    top: 4,
    left: 4,
    zIndex: 9999,
  },
});
