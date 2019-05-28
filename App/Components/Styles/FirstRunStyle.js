import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  title: {
    ...Fonts.style.h1,
  },
});
