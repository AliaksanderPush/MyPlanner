import React, {useEffect} from 'react';
import {View} from 'react-native';
import {CustomButton, CustomInput} from '@src/shared/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {AuthStackProps, IRestPassRequest} from '@src/app/types';
import {EAuthForm, SCREENS} from '@src/app/config';
import {changePasswordSchema} from '@src/app/validations';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {styles} from './RestorePassword.styles';
import {selectAuthInfo, useRestorePasswordMutation} from '@src/entities/auth';
import {useAppSelector} from '@src/app/store';

export const RestorePassword = () => {
  const {
    watch,
    setValue,
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({resolver: yupResolver(changePasswordSchema)});
  const [restorePassword, {error, isError, isLoading}] =
    useRestorePasswordMutation();
  const {code, email} = useAppSelector(selectAuthInfo);
  const navigation = useNavigation<AuthStackProps>();

  const sendData = (data: IRestPassRequest) => {
    const userData = {
      email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      code,
    };
    restorePassword(userData).then(() =>
      navigation.navigate(SCREENS.AUTH_SIGNIN),
    );
  };

  const handleChange = (
    val: string,
    name: EAuthForm.PASSWORD | EAuthForm.CONFIRM_PASSWORD,
  ) => {
    setValue(name, val);
  };

  useEffect(() => {
    register(EAuthForm.CONFIRM_PASSWORD);
    register(EAuthForm.PASSWORD);
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput
        leftIcon="lock"
        rightIcon="password"
        placeholder="Password"
        inputKey={EAuthForm.PASSWORD}
        value={watch(EAuthForm.PASSWORD)}
        onChangeText={handleChange}
        err={errors?.[EAuthForm.PASSWORD]?.message}
      />
      <CustomInput
        leftIcon="lock"
        rightIcon="password"
        placeholder="Confirm Password"
        inputKey={EAuthForm.CONFIRM_PASSWORD}
        value={watch(EAuthForm.CONFIRM_PASSWORD)}
        onChangeText={handleChange}
        err={errors?.[EAuthForm.CONFIRM_PASSWORD]?.message}
      />

      <View style={styles.button_box}>
        <CustomButton
          onPress={handleSubmit(sendData)}
          text="SUBMIT"
          appearance="containedXL"
        />
      </View>
    </View>
  );
};
