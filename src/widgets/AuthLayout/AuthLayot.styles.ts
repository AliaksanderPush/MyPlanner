import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '@src/app/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    paddingHorizontal: moderateScale(25),
    flex: 1,
  },
  loading_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_container: {
    flex: 1 / 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottom_container: {
    width: '100%',
    flex: 0.75,
  },
});
