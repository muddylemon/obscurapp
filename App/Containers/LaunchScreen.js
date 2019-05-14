import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import ImagePicker from 'react-native-image-crop-picker';

import ImageActions, { ImageSelectors } from '../Redux/ImageRedux';
import FullButton from '../Components/FullButton';
import styles from './Styles/LaunchScreenStyles';

const { width, height } = Dimensions.get('window');

const pickerOptions = {
  width: width,
  height: height,
  cropping: true,
  mediaType: 'photo',
  includeBase64: true,
};

export class LaunchScreen extends Component {
  picker = () =>
    ImagePicker.openPicker(pickerOptions).then(image => {
      this.props.pickImage(image);
      this.props.navigation.navigate('ViewerScreen');
    });
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>obscur</Text>
        <FullButton text="Select An Image" onPress={this.picker} />
      </View>
    );
  }
}

export default connect(
  state => ({
    image: ImageSelectors.getImage(state),
  }),
  dispatch => ({
    pickImage: image => dispatch(ImageActions.pickImage(image)),
  })
)(LaunchScreen);
