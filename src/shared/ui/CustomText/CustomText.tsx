import React from 'react';
import {Text} from 'react-native';
import {fonts} from '@src/shared/fonts';
import {ITextProps} from './CustomText.props';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '@src/app/styles';

export const CustomText = ({
  font,
  size,
  mt,
  mb,
  ml,
  mr,
  children,
  color,
}: ITextProps): JSX.Element => {
  const fontSize = size || 14;
  const marL = 0 || ml;
  const marR = 0 || mr;
  const marT = 0 || mt;
  const marB = 0 || mb;
  const colorFont = color || colors.textColor;

  function chooseFontFamily(): string {
    switch (font) {
      case 'robotoM':
        return fonts.robotoM;
      case 'robotoR':
        return fonts.robotoR;
      default:
        return fonts.robotoM;
    }
  }
  const thisFont = chooseFontFamily();
  return (
    <Text
      style={{
        fontFamily: thisFont,
        fontSize: RFValue(fontSize, 812),
        marginBottom: marB,
        marginLeft: marL,
        marginRight: marR,
        marginTop: marT,
        color: colorFont,
      }}>
      {children}
    </Text>
  );
};
