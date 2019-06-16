import { StyleSheet } from 'react-native';
import Metrics from '../../Themes/Metrics';
import colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
export default StyleSheet.create({
  container: {
    height: '100%',
    opacity: 1,
    justifyContent: 'center',
    paddingBottom: Metrics.baseMargin,
    backgroundColor: colors.white,
  },
  text: {
    ...Fonts.style.normal,
    paddingVertical: Metrics.doubleBaseMargin,
    color: colors.navy,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center',
  },
});
