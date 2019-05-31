import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts } from '../../Themes/'
import colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    paddingBottom: Metrics.baseMargin,
    backgroundColor: colors.white
  },
  heading: {
    fontSize: 40,
    fontFamily: Fonts.type.bold
  },
  noImages: {
    ...Fonts.style.serious
  },
  recentImage: {
    width: Metrics.screenWidth / 4 - Metrics.smallMargin * 2,
    height: Metrics.screenHeight / 4 - Metrics.smallMargin * 2,
    margin: 2,
    resizeMode: 'cover',
    borderRadius: 8
  },
  pickerButton: {
    flex: 0,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    margin: Metrics.baseMargin,
    bottom: 0,
    right: 0
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
})
