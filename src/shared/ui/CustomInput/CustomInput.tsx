import React, {useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {HelperText} from 'react-native-paper';
import {styles} from './CustomInput.styles';
import {colors} from '@src/app/styles';
import classNames from 'classnames-react-native';
import {ICustomTextInput} from './CustomInput.props';
import {EmailIcon, HidePasswordIcon, ViewPasswordIcon} from '..';

export const CustomInput = ({
  label,
  value,
  setValue,
  err,
  iconPos,
  typeIcon,
  w = '100%',
}: ICustomTextInput): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  function renderTypeIcon() {
    switch (typeIcon) {
      case 'password':
        return (
          <Pressable onPress={() => setShow(!show)} style={styleBtn}>
            {!show ? (
              <HidePasswordIcon color={colors.iconColor} />
            ) : (
              <ViewPasswordIcon color={colors.iconColor} />
            )}
          </Pressable>
        );

      case 'email':
        return (
          <View style={styleBtn}>
            <EmailIcon color={colors.iconColor} />
          </View>
        );

      default:
        return null;
    }
  }

  const styleBtn = classNames(
    styles.icon,
    [styles.left, iconPos === 'left'],
    [styles.right, iconPos === 'right'],
  );

  return (
    <View style={[styles.inputContainer, {width: w}]}>
      {renderTypeIcon()}
      <View style={styles.input_box}>
        <TextInput
          secureTextEntry={typeIcon === 'password' && !show}
          style={[
            styles.text_input,
            {paddingLeft: iconPos === 'left' ? 40 : 10},
          ]}
          value={value}
          onChangeText={text => setValue(text)}
          cursorColor={colors.textColor}
        />
      </View>
      <HelperText type="error" visible={!!err}>
        {err}
      </HelperText>
    </View>
  );
};
