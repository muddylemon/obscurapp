import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  heading: {
    fontSize: 40,
    fontFamily: Fonts.type.bold,
  },
});
