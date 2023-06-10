import React from 'react';
import {View, TextInput} from 'react-native';
import {HelperText} from 'react-native-paper';
import {EmailIcon} from '../icons/EmailIcon';
import {styles} from './CustomInput.styles';

export const CustomInput = () => {
  const [text, setText] = React.useState('');

  const hasErrors = () => {
    return !text.includes('@');
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>
        <EmailIcon />
      </View>

      <TextInput
        style={styles.text_input}
        value={text}
        onChangeText={text => setText(text)}
      />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};
