import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FirstRunStyle'

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Obscur</Text>
    <Text style={styles.sectionText}>To get started, choose an image</Text>
  </View>
)
