import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import colors from '../Themes/Colors'

export default class BackButton extends Component {
  goBack = () => this.props.navigation.navigate('LaunchScreen');

  render () {
    return (
      <Icon
        name='arrowleft'
        type='antdesign'
        reverse
        size={15}
        color={colors.gold}
        onPress={this.goBack}
      />
    )
  }
}
