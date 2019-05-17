import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { ImageSelectors } from '../Redux/ImageRedux';
import styles from './Styles/ViewerScreenStyle';

import { RNCamera } from 'react-native-camera';
import RoundedButton from '../Components/RoundedButton';

const { width, height } = Dimensions.get('window');

class ViewerScreen extends Component {
  state = {
    opacity: 0.5,
  };
  ref = cam => (this.camera = cam);
  goBack = () => {
    this.props.navigation.navigate('LaunchScreen');
  };
  onPanGestureEvent = ev => {
    const opacity = 1 - ev.nativeEvent.absoluteY / height;
    this.setState({ opacity });
  };
  onSingleTap = ev => {
    console.log({ ev });
  };
  render() {
    const { image } = this.props;

    return (
      <View style={styles.container}>
        <RNCamera
          captureAudio={false}
          ref={this.ref}
          type={RNCamera.Constants.Type.back}
          style={styles.backgroundImage}
        >
          <View style={styles.closeButton}>
            <RoundedButton text="x" onPress={this.goBack} />
          </View>
          <TapGestureHandler onHandlerStateChange={this.onSingleTap}>
            <PanGestureHandler
              minDist={20}
              onGestureEvent={this.onPanGestureEvent}
            >
              <Image
                style={{
                  ...styles.backgroundImage,
                  height: (width / image.width) * image.height,
                  width: width,
                  opacity: this.state.opacity,
                  resizeMode: 'contain',
                }}
                source={{ uri: `data:${image.mime};base64,${image.data}` }}
              />
            </PanGestureHandler>
          </TapGestureHandler>
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
