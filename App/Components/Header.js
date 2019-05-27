import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Colors } from '../Themes';
import { Icon } from 'react-native-elements';

import styles from './Styles/HeaderStyle';

export default class Header extends Component {
  // // Prop type warnings
  static propTypes = {
    goToHelp: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>obscur</Text>
        <Icon
          name="question"
          type="antdesign"
          reverse
          size={15}
          color={Colors.help}
          onPress={this.props.goToHelp}
        />
      </View>
    );
  }
}
