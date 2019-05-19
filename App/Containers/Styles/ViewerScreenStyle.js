import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes/';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: colors.snow,
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 4,
    left: 4,
    zIndex: 9999,
  },
  captureButton: {
    flex: 0,
    position: 'absolute',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    bottom: 0,
    margin: 20,
  },
});
