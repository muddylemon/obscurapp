import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import ImagePicker from 'react-native-image-crop-picker'

import ImageActions, { ImageSelectors } from '../Redux/ImageRedux'
import FullButton from '../Components/FullButton'
import styles from './Styles/LaunchScreenStyles'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

const pickerOptions = {
  width: width,
  height: height,
  cropping: true,
  mediaType: 'photo',
  includeBase64: true
}

export class LaunchScreen extends Component {
  picker = () =>
    ImagePicker.openPicker(pickerOptions).then(image => {
      this.props.pickImage(image)
      this.props.navigation.navigate('ViewerScreen')
    });
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>obscur</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            To get started, choose an image to superimpose on reality
          </Text>
          <FullButton text='Select An Image' onPress={this.picker} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Images</Text>
          <ScrollView>
            <Text>And some pictures go here....</Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default connect(
  state => ({
    image: ImageSelectors.getImage(state)
  }),
  dispatch => ({
    pickImage: image => dispatch(ImageActions.pickImage(image))
  })
)(LaunchScreen)
