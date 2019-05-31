import React, { Component } from 'react'
import { Image } from 'react-native'
import styles from './Styles/PreviewImageStyle'

export default class PreviewImage extends Component {
  render () {
    if (!this.props.preview) return null
    return (
      <Image
        source={{
          uri: this.props.preview.path
        }}
        style={styles.image}
      />
    )
  }
}
