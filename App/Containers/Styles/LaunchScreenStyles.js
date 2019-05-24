import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Fonts } from '../../Themes/';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    paddingTop: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: colors.snow,
  },
  heading: {
    fontSize: 40,
    fontFamily: Fonts.type.bold,
    marginTop: -Metrics.doubleBaseMargin,
  },
  noImages: {
    ...Fonts.style.serious,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
});
