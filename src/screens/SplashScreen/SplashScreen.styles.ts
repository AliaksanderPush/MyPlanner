import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@src/app/styles';

export const styles = StyleSheet.create({
  general: {
    backgroundColor: colors.bgColor,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'relative',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
