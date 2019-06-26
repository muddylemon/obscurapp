import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './Styles/PreviewImageStyle';

export default ({ preview }) =>
  preview && (
    <Image
      source={{
        uri: preview.path,
      }}
      style={styles.image}
    />
  );
