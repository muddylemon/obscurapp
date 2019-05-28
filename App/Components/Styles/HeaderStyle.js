import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  heading: {
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.type.bold,
    color: Colors.gold,
  },
});
