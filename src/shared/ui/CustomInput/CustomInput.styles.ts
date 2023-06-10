import {StyleSheet} from 'react-native';
import {colors} from '@src/app/styles';
import {fonts} from '@src/shared/fonts';

export const styles = StyleSheet.create({
  text_input: {
    backgroundColor: colors.whiteColor,
    width: 324,
    height: 36,
    borderRadius: 36,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  inputContainer: {
    justifyContent: 'center',
  },
});
