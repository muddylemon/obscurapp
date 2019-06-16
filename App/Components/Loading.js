import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/LoadingStyle';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading...</Text>
  </View>
);
