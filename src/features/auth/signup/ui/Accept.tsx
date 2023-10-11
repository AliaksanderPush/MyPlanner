import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors, moderateScale, moderateScaleVertical} from '@src/app/styles';

export const Accept = (): JSX.Element => {
  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
    <BouncyCheckbox
      style={{
        marginTop: moderateScaleVertical(15),
        borderColor: colors.contained,
      }}
      size={20}
      isChecked={checkboxState}
      disableBuiltInState
      onPress={() => setCheckboxState(!checkboxState)}
      innerIconStyle={{
        borderRadius: 4,
        borderColor: colors.contained,
      }}
      iconStyle={{
        borderRadius: moderateScale(2),
        borderColor: colors.contained,
      }}
      fillColor={colors.contained}
      textStyle={{
        textDecorationLine: 'none',
        color: colors.contained,
      }}
    />
  );
};
