import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import styles from './Styles/HelpScreenStyle';
import colors from '../Themes/Colors';

class HelpScreen extends Component {
  goBack = () => this.props.navigation.navigate('LaunchScreen');

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            type="feather"
            reverse
            size={15}
            color={colors.bloodOrange}
            onPress={this.goBack}
          />
          <Text style={styles.sectionTitle}>How To Use Obscur</Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text>1. Select an image from your device</Text>
            <Text>2. Crop, rotate and scale the image as you like</Text>
            <Text>3. Hold the device in front of your canvas</Text>
            <Text>4. Tap the Pause button to freeze the live image</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(HelpScreen);
