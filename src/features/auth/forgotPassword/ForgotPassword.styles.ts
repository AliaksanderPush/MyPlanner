import {moderateScale, moderateScaleVertical} from '@src/app/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(60),
  },
  button_box: {
    paddingTop: moderateScaleVertical(60),
  },

  register_conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: moderateScaleVertical(30),
  },
});
