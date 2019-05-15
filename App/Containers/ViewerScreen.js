import React, { Component } from 'react'
import { Image, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ImageSelectors } from '../Redux/ImageRedux'
import styles from './Styles/ViewerScreenStyle'

import { RNCamera } from 'react-native-camera'
import RoundedButton from '../Components/RoundedButton'

const { width } = Dimensions.get('window')

class ViewerScreen extends Component {
  ref = cam => (this.camera = cam);
  goBack = () => {
    this.props.navigation.navigate('LaunchScreen')
  };
  render () {
    const { image } = this.props

    return (
      <View style={styles.container}>
        <RNCamera
          captureAudio={false}
          ref={this.ref}
          type={RNCamera.Constants.Type.back}
          style={styles.backgroundImage}
        >
          <View style={styles.closeButton}>
            <RoundedButton text='x' onPress={this.goBack} />
          </View>
          <Image
            style={{
              ...styles.backgroundImage,
              height: (width / image.width) * image.height,
              width: width,
              opacity: 0.5
            }}
            source={{ uri: `data:${image.mime};base64,${image.data}` }}
          />
        </RNCamera>
      </View>
    )
  }
}

export default connect(
  state => ({
    image: ImageSelectors.getImage(state)
  }),
  null
)(ViewerScreen)
