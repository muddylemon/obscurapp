import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon, Button } from 'react-native-elements';
import { v4 } from 'uuid';
import ImagePicker from 'react-native-image-crop-picker';

import ImageActions, { ImageSelectors } from '../Redux/ImageRedux';
import styles from './Styles/LaunchScreenStyles';

import { Colors } from '../Themes';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const pickerOptions = {
  width: windowWidth,
  height: windowHeight,
  cropping: true,
  mediaType: 'photo',
  includeBase64: true,
  avoidEmptySpaceAroundImage: false,
};

export class LaunchScreen extends Component {
  goToHelp = () => {
    this.props.navigation.navigate('HelpScreen');
  };
  picker = () =>
    ImagePicker.openPicker(pickerOptions)
      .then(this.pick)
      .catch(e => console.log({ e }));

  pick = image => {
    this.props.pickImage(image);
    this.props.navigation.navigate('ViewerScreen');
  };

  renderRecent = () => {
    if (!this.props.recent || !this.props.recent.length) {
      return <Text style={styles.noImages}>No recent images</Text>;
    }
    const imageSize = windowWidth / 4.5;
    return this.props.recent.map(r => (
      <TouchableOpacity key={v4()} onPress={() => this.pick(r)}>
        <Image source={{ uri: r.path }} style={styles.recentImage} />
      </TouchableOpacity>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>obscur</Text>
          <Icon
            name="question"
            type="antdesign"
            reverse
            size={15}
            color={Colors.facebook}
            onPress={this.goToHelp}
          />
        </View>

        <ScrollView>
          <View style={styles.groupContainer}>{this.renderRecent()}</View>
        </ScrollView>
        <View style={styles.pickerButton}>
          <Text style={styles.titleText}>Choose An Image </Text>
          <Icon
            name="plus"
            type="antdesign"
            reverse
            raised
            size={25}
            color={Colors.fire}
            onPress={this.picker}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    image: ImageSelectors.getImage(state),
    recent: ImageSelectors.getRecent(state),
  }),
  dispatch => ({
    pickImage: image => dispatch(ImageActions.pickImage(image)),
  })
)(LaunchScreen);
