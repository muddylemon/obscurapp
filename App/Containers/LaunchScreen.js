import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Button } from 'react-native-elements';
import { v4 } from 'uuid';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../Themes/Colors';
import ImageActions, { ImageSelectors } from '../Redux/ImageRedux';
import styles from './Styles/LaunchScreenStyles';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const pickerOptions = {
  width: width,
  height: height,
  cropping: true,
  mediaType: 'photo',
  includeBase64: true,
  avoidEmptySpaceAroundImage: false,
};

export class LaunchScreen extends Component {
  picker = () =>
    ImagePicker.openPicker(pickerOptions)
      .then(image => {
        this.props.pickImage(image);
        this.props.navigation.navigate('ViewerScreen');
      })
      .catch(e => console.log({ e }));

  renderRecent = () => {
    console.log(this.props);
    if (!this.props.recent || !this.props.recent.length) {
      return <Text>No recent images</Text>;
    }
    return this.props.recent.map(r => (
      <Image
        key={v4()}
        source={{ uri: r.path }}
        style={{
          width: 100,
          height: 100,
          margin: 2,
          resizeMode: 'cover',
        }}
      />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>obscur</Text>
        <View style={styles.section}>
          <Button
            title=" Choose an Image"
            type="solid"
            onPress={this.picker}
            icon={
              <Icon name="image" type="feather" size={25} color={colors.snow} />
            }
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent</Text>
          <ScrollView>
            <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
              {this.renderRecent()}
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How To Use:</Text>
          <ScrollView>
            <Text>1. Select an image from your device</Text>
            <Text>2. Crop, rotate and scale the image as you like</Text>
            <Text>
              3. Hold the device in front of what you're comparing the image to
            </Text>
            <Text>4. Tap the Pause button to freeze the live image</Text>
          </ScrollView>
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
