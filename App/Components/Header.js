import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView } from 'react-native';
import { Colors } from '../Themes';
import { Icon } from 'react-native-elements';

import styles from './Styles/HeaderStyle';

export const Header = ({ goToHelp }) => (
  <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.heading}>obscur</Text>
      <Icon
        name="question"
        type="antdesign"
        reverse
        size={20}
        color={Colors.help}
        onPress={goToHelp}
      />
    </View>
  </SafeAreaView>
);

Header.propTypes = {
  goToHelp: PropTypes.func.isRequired,
};

export default Header;
