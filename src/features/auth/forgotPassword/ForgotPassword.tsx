import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {CustomButton, CustomInput, CustomText} from '@src/shared/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {colors} from '@src/app/styles';
import {AuthStackProps} from '@src/app/types';
import {EAuthForm, SCREENS} from '@src/app/config';
import {forgotPassSchema} from '@src/app/validations';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ForgotPassword.styles';

export const ForgotPassword = () => {
  const {
    watch,
    setValue,
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({resolver: yupResolver(forgotPassSchema)});

  const navigation = useNavigation<AuthStackProps>();

  const sendData = (data: {email: string}) => {
    const {email} = data;
    console.log('forgot=>', data);
    navigation.navigate(SCREENS.AUTH_CONFIRM_CODE);
  };

  const handleChange = (val: string, name: EAuthForm.EMAIL) => {
    setValue(name, val);
  };

  useEffect(() => {
    register(EAuthForm.EMAIL);
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput
        leftIcon="email"
        placeholder="Email"
        inputKey={EAuthForm.EMAIL}
        value={watch(EAuthForm.EMAIL)}
        onChangeText={handleChange}
        err={errors?.[EAuthForm.EMAIL]?.message}
      />

      <View style={styles.button_box}>
        <CustomButton
          onPress={handleSubmit(sendData)}
          text="Continue"
          appearance="containedXL"
        />
      </View>
      <View style={styles.register_conteiner}>
        <Pressable onPress={() => navigation.goBack()}>
          <CustomText size={12} color={colors.contained}>
            Go Back
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};
