import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    header: {
      flex: 0,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    topRightButton: {
      flex: 0,
      alignSelf: 'flex-end',
      flexDirection: 'row',

      position: 'absolute',
      top: Metrics.smallMargin,
      right: Metrics.smallMargin,
      zIndex: 9999,
    },
    topLeftButton: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    bottomRightButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    bottomLeftButton: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.eggplant,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: Colors.eggplant,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
    titleText: {
      ...Fonts.style.h4,
      color: Colors.cloud,
    },
    sectionTitle: {
      ...Fonts.style.h4,
      color: Colors.coal,
      marginTop: Metrics.smallMargin,
      paddingHorizontal: Metrics.baseMargin,
      alignItems: 'center',
      textAlign: 'left',
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

export default ApplicationStyles;
