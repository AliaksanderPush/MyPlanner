import {StyleSheet} from 'react-native';
import {colors, moderateScale, textScale} from '@src/app/styles';
import {fonts} from '@src/shared/fonts';

export const styles = StyleSheet.create({
  input_box: {
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
  },
  text_input: {
    backgroundColor: colors.whiteColor,
    height: moderateScale(45),
    width: '100%',
    borderRadius: moderateScale(45),
    color: colors.textColor,
    fontSize: textScale(14),
    fontFamily: fonts.robotoR,
    paddingLeft: moderateScale(50),
    paddingRight: moderateScale(20),
  },
  icon: {
    position: 'absolute',
    zIndex: 100,
  },
  left: {
    left: moderateScale(20),
  },
  right: {
    right: moderateScale(20),
  },
  inputContainer: {
    justifyContent: 'center',
  },
});
