import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/RecentStyle';
import { v4 } from 'uuid';

const sortedRecent = recent => {
  if (typeof recent.asMutable !== 'undefined') {
    recent = recent.asMutable();
  }

  return recent.sort((a, b) => a.creationDate < b.creationDate);
};

const Recent = ({ recent, pick }) => {
  const sorted = sortedRecent(recent);

  if (!sorted || !sorted.length) {
    return <Text style={styles.noImages}>No recent images</Text>;
  }

  return sorted.map(r => (
    <TouchableOpacity key={v4()} onPress={() => pick(r)}>
      <Image
        source={{ uri: r.path || r.sourceURI }}
        style={styles.recentImage}
      />
    </TouchableOpacity>
  ));
};

export default Recent;
