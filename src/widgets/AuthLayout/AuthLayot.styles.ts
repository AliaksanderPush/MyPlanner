import {StyleSheet} from 'react-native';
import {colors} from '@src/app/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    paddingHorizontal: 25,
  },
  loading_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_container: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottom_container: {
    width: '100%',
    height: '75%',
  },
});
