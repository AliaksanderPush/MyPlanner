import React, {useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {HelperText} from 'react-native-paper';
import {colors} from '@src/app/styles';
import Lock from '@src/shared/assets/icons/lock.svg';
import {ICustomTextInput} from './CustomInput.props';
import {
  EmailIcon,
  HidePasswordIcon,
  ViewPasswordIcon,
} from '@src/shared/ui/icons';
import {styles} from './CustomInput.styles';

export const CustomInput = ({
  placeholder = '',
  value,
  onChangeText,
  err,
  inputKey,
  leftIcon,
  rightIcon,
}: ICustomTextInput): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (text: string) => {
    if (!onChangeText) {
      return;
    }
    if (inputKey) {
      onChangeText(text, inputKey);
    } else {
      onChangeText(text);
    }
  };

  function renderRightIcon() {
    switch (rightIcon) {
      case 'password':
        return (
          <Pressable
            style={[styles.icon, styles.right]}
            onPress={() => setShow(!show)}>
            {!show ? (
              <HidePasswordIcon color={colors.iconColor} />
            ) : (
              <ViewPasswordIcon color={colors.iconColor} />
            )}
          </Pressable>
        );
      default:
        return null;
    }
  }

  function renderLeftIcon() {
    switch (leftIcon) {
      case 'lock':
        return <Lock width={20} height={20} />;
      case 'email':
        return <EmailIcon color={colors.iconColor} />;

      default:
        return null;
    }
  }
  const leftIconPos = renderLeftIcon();
  const rightIconPos = renderRightIcon();

  return (
    <View style={styles.inputContainer}>
      <View style={styles.input_box}>
        <View style={[styles.icon, styles.left]}>{leftIconPos}</View>
        {rightIconPos}
        <TextInput
          secureTextEntry={rightIcon === 'password' && !show}
          style={styles.text_input}
          value={value}
          onChangeText={handleChange}
          cursorColor={colors.textColor}
          placeholder={placeholder}
        />
      </View>
      <HelperText type="error" visible={!!err}>
        {err}
      </HelperText>
    </View>
  );
};
