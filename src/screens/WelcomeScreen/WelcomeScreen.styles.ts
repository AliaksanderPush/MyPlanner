import {StyleSheet} from 'react-native';
import {fonts} from '@src/shared/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexibleContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#02326b',
    fontSize: 40,
    lineHeight: 80,
    fontFamily: fonts.robotoM,
  },
});
