import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.ember,
    borderBottomColor: Colors.steel,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.prince,
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
  },
});
