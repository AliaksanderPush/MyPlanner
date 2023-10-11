import {moderateScale, moderateScaleVertical} from '@src/app/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(32),
  },
  button_box: {
    paddingTop: moderateScaleVertical(24),
  },
  forgot_container: {
    alignItems: 'center',
    paddingTop: moderateScale(5),
  },
  register_conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: moderateScaleVertical(16),
  },
});
