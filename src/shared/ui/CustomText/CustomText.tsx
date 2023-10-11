import React from 'react';
import {Text} from 'react-native';
import {fonts} from '@src/shared/fonts';
import {ITextProps} from './CustomText.props';
import {colors, textScale} from '@src/app/styles';

export const CustomText = ({
  font,
  size = 14,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  children,
  color,
  center = false,
}: ITextProps): JSX.Element => {
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
        fontSize: textScale(size),
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        color: colorFont,
        textAlign: center ? 'center' : 'left',
      }}>
      {children}
    </Text>
  );
};
