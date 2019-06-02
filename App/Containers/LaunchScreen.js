import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { v4 } from 'uuid';
import ImagePicker from 'react-native-image-crop-picker';

import ImageActions, { ImageSelectors } from '../Redux/ImageRedux';
import styles from './Styles/LaunchScreenStyles';

import { Colors } from '../Themes';
import Header from '../Components/Header';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const pickerOptions = {
  width: windowWidth,
  height: windowHeight,
  cropping: true,
  mediaType: 'photo',
  includeBase64: true,
  avoidEmptySpaceAroundImage: false,
};

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export class LaunchScreen extends Component {
  state = {
    isLoading: false,
  };
  goToHelp = () => {
    this.props.navigation.navigate('HelpScreen');
  };
  openPicker = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    this.setState({ isLoading: true });
    ImagePicker.openPicker(pickerOptions)
      .then(this.pick)
      .then(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

        this.setState({ isLoading: false });
      })
      .catch(e => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

        this.setState({ isLoading: false });
        console.log({ e });
      });
  };

  pick = image => {
    this.props.pickImage(image);
    this.props.navigation.navigate('ViewerScreen');
  };

  renderRecent = () => {
    let { recent } = this.props;

    if (!recent || !recent.length) {
      return <Text style={styles.noImages}>No recent images</Text>;
    }
    if (typeof recent.asMutable !== 'undefined') {
      recent = recent.asMutable();
    }

    return recent
      .sort((a, b) => a.modificationDate < b.modificationDate)
      .map(r => (
        <TouchableOpacity key={v4()} onPress={() => this.pick(r)}>
          <Image source={{ uri: r.path }} style={styles.recentImage} />
        </TouchableOpacity>
      ));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ ...styles.container, opacity: 1, justifyContent: 'center' }}
        >
          <Text style={styles.sectionText}>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header goToHelp={this.goToHelp} />
        <ScrollView>
          <View style={styles.groupContainer}>{this.renderRecent()}</View>
        </ScrollView>
        <View style={styles.pickerButton}>
          <Icon
            name="plus"
            type="antdesign"
            reverse
            raised
            size={30}
            color={Colors.red}
            onPress={this.openPicker}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    image: ImageSelectors.getImage(state),
    recent: ImageSelectors.getRecent(state),
  }),
  dispatch => ({
    pickImage: image => dispatch(ImageActions.pickImage(image)),
  })
)(LaunchScreen);
