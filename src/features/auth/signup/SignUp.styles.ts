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
  accept_box: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  register_conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: moderateScaleVertical(16),
  },
});
