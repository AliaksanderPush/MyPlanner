import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {CustomButton, CustomInput, CustomText} from '@src/shared/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {colors} from '@src/app/styles';
import {AuthStackProps, ILoginRequest} from '@src/app/types';
import {EAuthForm, SCREENS} from '@src/app/config';
import {loginSchema} from '@src/app/validations';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {styles} from './LogIn.styles';
import {useLoginUserMutation} from '@src/entities/auth';
import {setTokens} from '@src/shared/storage';

export const LogIn = () => {
  const {
    watch,
    setValue,
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({resolver: yupResolver(loginSchema)});
  const [loginUser, {isError, isSuccess}] = useLoginUserMutation();
  console.log('is Errror =>', isError);
  const navigation = useNavigation<AuthStackProps>();

  const sendData = (data: ILoginRequest) => {
    const {email, password} = data;
    loginUser(data)
      .then(payload => setTokens(payload.data))
      .catch(e => console.log('some err=>', e));
  };

  const handleChange = (
    val: string,
    name: EAuthForm.PASSWORD | EAuthForm.EMAIL,
  ) => {
    setValue(name, val);
  };

  useEffect(() => {
    register(EAuthForm.EMAIL, {required: true});
    register(EAuthForm.PASSWORD, {required: true});
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
      <CustomInput
        leftIcon="lock"
        rightIcon="password"
        placeholder="Password"
        inputKey={EAuthForm.PASSWORD}
        value={watch(EAuthForm.PASSWORD)}
        onChangeText={handleChange}
        err={errors?.[EAuthForm.PASSWORD]?.message}
      />
      <View style={styles.forgot_container}>
        <Pressable
          onPress={() => navigation.navigate(SCREENS.AUTH_FORGOT_PASSWORD)}>
          <CustomText size={12} color={colors.textColor}>
            Forgot Password?
          </CustomText>
        </Pressable>
      </View>

      <View style={styles.button_box}>
        <CustomButton
          onPress={handleSubmit(sendData)}
          text="LOGIN"
          appearance="containedXL"
        />
      </View>
      <View style={styles.register_conteiner}>
        <CustomText mr={5} size={12} color={colors.textColor}>
          Don’t you have an account?
        </CustomText>
        <Pressable onPress={() => navigation.navigate(SCREENS.AUTH_SIGNUP)}>
          <CustomText size={12} color={colors.contained}>
            Sign up
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};
