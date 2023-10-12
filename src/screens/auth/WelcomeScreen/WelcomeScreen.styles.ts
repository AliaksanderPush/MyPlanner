import {moderateScale, moderateScaleVertical} from '@src/app/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(25),
  },

  middle_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScaleVertical(50),
  },

  image: {
    width: 359,
    height: 362,
    resizeMode: 'contain',
  },
});
