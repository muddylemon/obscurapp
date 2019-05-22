import React, { Component } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { ImageSelectors } from '../Redux/ImageRedux';
import styles from './Styles/ViewerScreenStyle';

import { RNCamera } from 'react-native-camera';
import { Icon, Button } from 'react-native-elements';
import colors from '../Themes/Colors';
import PreviewImage from '../Components/PreviewImage';
const { width, height } = Dimensions.get('window');
const pictureOptions = {
  quality: 0.8,
  base64: true,
  exif: true,
  orientation: 'portrait',
  forceUpOrientation: true,
  fixOrientation: true,
};

class ViewerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: null };
    this.tapRef = React.createRef();
    this.panRef = React.createRef();
    this._opacity = new Animated.Value(0.5);
  }

  ref = cam => (this.camera = cam);

  goBack = () => {
    this.props.navigation.navigate('LaunchScreen');
  };

  onPanGestureEvent = ev => {
    const opacity = 1 - ev.nativeEvent.absoluteY / height;
    this._opacity.setValue(opacity);
  };

  onSingleTap = async () => {
    if (this.state.preview) {
      this.setState({ preview: null });
      this.camera.resumePreview();
      return;
    }
    this.takePicture();
  };

  takePicture = async function() {
    if (this.camera) {
      const preview = await this.camera.takePictureAsync(pictureOptions);
      this.setState({ preview });
    }
  };

  render() {
    const { image } = this.props;

    return (
      <View style={styles.container}>
        <RNCamera
          pauseAfterCapture
          captureAudio={false}
          ref={this.ref}
          type={RNCamera.Constants.Type.back}
          style={styles.backgroundImage}
        >
          {this.state.preview && <PreviewImage preview={this.state.preview} />}
          <Animated.View>
            <PanGestureHandler
              ref={this.panRef}
              minDist={10}
              activeOffsetX={[-20, 20]}
              onGestureEvent={this.onPanGestureEvent}
            >
              <Animated.Image
                style={{
                  ...styles.backgroundImage,
                  height: (width / image.width) * image.height,
                  width: width,
                  opacity: this._opacity,
                  resizeMode: 'cover',
                }}
                source={{ uri: `data:${image.mime};base64,${image.data}` }}
              />
            </PanGestureHandler>
          </Animated.View>
          <View style={styles.closeButton}>
            <Icon
              name="arrow-left"
              type="feather"
              reverse
              size={25}
              color={colors.bloodOrange}
              onPress={this.goBack}
            />
          </View>
          <View style={styles.captureButton}>
            <Button
              title="Pause"
              type="outline"
              onPress={this.onSingleTap}
              icon={
                <Icon name="pause" type="feather" size={25} color="#517fa4" />
              }
            />
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default connect(
  state => ({
    image: ImageSelectors.getImage(state),
  }),
  null
)(ViewerScreen);
