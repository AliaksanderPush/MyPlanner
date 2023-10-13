import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {CustomButton, CustomInput, CustomText} from '@src/shared/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {colors} from '@src/app/styles';
import {AuthStackProps, IRegistrRequest} from '@src/app/types';
import {EAuthForm, SCREENS} from '@src/app/config';
import {registrationSchema} from '@src/app/validations';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {styles} from './SignUp.styles';
import {Accept} from './ui/Accept';
import {useRegisterUserMutation} from '@src/entities/auth';
import {getTokens, setTokens} from '@src/shared/storage';

export const SignUp = () => {
  const {
    watch,
    setValue,
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({resolver: yupResolver(registrationSchema)});
  const [registerUser, {isLoading, data: user, error}] =
    useRegisterUserMutation();
  const navigation = useNavigation<AuthStackProps>();

  console.log('registr err=> ', error);

  const sendData = (data: IRegistrRequest) => {
    registerUser(data)
      .then((payload: any) => setTokens(payload.data))
      .catch(e => console.log('some registr err=>', e));
  };

  const handleChange = (
    val: string,
    name:
      | EAuthForm.PASSWORD
      | EAuthForm.EMAIL
      | EAuthForm.CONFIRM_PASSWORD
      | EAuthForm.NAME,
  ) => {
    setValue(name, val);
  };

  useEffect(() => {
    register(EAuthForm.EMAIL, {required: true});
    register(EAuthForm.PASSWORD, {required: true});
    register(EAuthForm.CONFIRM_PASSWORD, {required: true});
    register(EAuthForm.NAME, {required: true});
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput
        leftIcon="email"
        placeholder="Name"
        inputKey={EAuthForm.NAME}
        value={watch(EAuthForm.NAME)}
        onChangeText={handleChange}
        err={errors?.[EAuthForm.NAME]?.message}
      />

      <CustomInput
        leftIcon="email"
        placeholder="Email"
        inputKey={EAuthForm.EMAIL}
        value={watch(EAuthForm.EMAIL)}
        onChangeText={handleChange}
        err={errors?.[EAuthForm.EMAIL]?.message}
      />
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

      <View style={styles.accept_box}>
        <Accept />
        <CustomText size={12} color={colors.textColor}>
          Accept
        </CustomText>
        <Pressable onPress={() => navigation.navigate(SCREENS.AUTH_SIGNIN)}>
          <CustomText ml={5} size={12} color={colors.contained}>
            T&C
          </CustomText>
        </Pressable>
      </View>

      <View style={styles.button_box}>
        <CustomButton
          onPress={handleSubmit(sendData)}
          text="SUBMIT"
          appearance="containedXL"
        />
      </View>
      <View style={styles.register_conteiner}>
        <CustomText mr={5} size={12} color={colors.textColor}>
          Do you have an account?
        </CustomText>
        <Pressable onPress={() => navigation.navigate(SCREENS.AUTH_SIGNIN)}>
          <CustomText size={12} color={colors.contained}>
            Sign in
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};
