import {StyleSheet} from 'react-native';
import {colors} from '@src/app/styles';
import {fonts} from '@src/shared/fonts';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeXL: {
    width: 324,
    height: 45,
    borderRadius: 45,
  },
  containedXL: {
    backgroundColor: colors.contained,
  },
  elevatedXL: {
    backgroundColor: colors.elevated,
  },
  containedXlText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontFamily: fonts.robotoB,
  },
});
