import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ExamplesRegistry from '../Services/ExamplesRegistry';

ExamplesRegistry.addComponentExample('AbTester', () => (
  <AbTester
    chooser={() => Math.random() <= 0.5}
    a={() => <View>Choice A</View>}
    b={() => <View>Choice B</View>}
  />
));

export default class AbTester extends Component {
  static propTypes = {
    chooser: PropTypes.func.isRequired,
    a: PropTypes.func.isRequired,
    b: PropTypes.func.isRequired,
  };

  static defaultProps = {
    chooser: () => false,
  };

  render() {
    this.props.chooser() ? this.props.a() : this.props.b();
  }
}
