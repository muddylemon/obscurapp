import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './Styles/HelpScreenStyle';
import BackButton from '../Components/BackButton';

export default ({ navigation }) => (
  <View style={styles.mainContainer}>
    <View style={styles.header}>
      <BackButton navigation={navigation} />
    </View>
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>How To Use Obscur</Text>
      <View style={styles.section}>
        <Text>1. Select an image from your device</Text>
        <Text>2. Crop, rotate and scale the image as you like</Text>
        <Text>3. Hold the device in front of your canvas</Text>
        <Text>4. Tap the Pause button to freeze the live image</Text>
        <Text>5. Drag your finger up and down to change the opacity</Text>
      </View>
    </ScrollView>
  </View>
);
