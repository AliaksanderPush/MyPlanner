import {StyleSheet} from 'react-native';
import {colors, moderateScale, textScale} from '@src/app/styles';
import {fonts} from '@src/shared/fonts';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeXL: {
    width: '100%',
    height: moderateScale(45),
    borderRadius: moderateScale(45),
  },
  containedXL: {
    backgroundColor: colors.contained,
  },
  elevatedXL: {
    backgroundColor: colors.elevated,
  },
  containedXlText: {
    color: colors.whiteColor,
    fontSize: textScale(16),
    fontFamily: fonts.robotoB,
  },
});
