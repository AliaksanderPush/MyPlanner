import {StyleSheet} from 'react-native';
import {colors} from '@src/app/styles';
import {fonts} from '@src/shared/fonts';

export const styles = StyleSheet.create({
  text_input: {
    backgroundColor: colors.whiteColor,
    height: 45,
    borderRadius: 45,
    paddingRight: 10,
    color: colors.textColor,
    fontSize: 16,
    fontFamily: fonts.robotoR,
  },
  input_box: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    zIndex: 100,
    top: 27,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 26,
    height: 26,
  },
});
