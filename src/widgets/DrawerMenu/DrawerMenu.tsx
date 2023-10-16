import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '@src/app/styles';
import React from 'react';
import {Pressable} from 'react-native';
import Logout from '@src/shared/assets/icons/logout.svg';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './DrawerMenu.styles';
import {CustomText} from '@src/shared/ui';
import {cleatAuth, selectAuthInfo, useLogoutMutation} from '@src/entities/auth';
import {useAppDispatch, useAppSelector} from '@src/app/store';
import {removeToken} from '@src/shared/storage';
import {clearUser} from '@src/entities/user';

export const DrawerMenu = (props: DrawerContentComponentProps): JSX.Element => {
  const {tokens} = useAppSelector(selectAuthInfo);
  const dispatch = useAppDispatch();
  const [logout, {error, isLoading}] = useLogoutMutation();

  const handleClose = () => {
    props.navigation.closeDrawer();
  };

  const handleLogout = async () => {
    if (tokens?.refreshToken) {
      logout({refreshToken: tokens?.refreshToken})
        .then(() => removeToken())
        .then(() => dispatch(cleatAuth()))
        .catch(e => console.log('stor err=>', e));
    }
    dispatch(clearUser());
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={[colors.bluegradStart, colors.bluegraEnd]}>
      <DrawerContent {...props}>
        <DrawerItemList {...props} />
      </DrawerContent>
      <Pressable
        onPress={handleLogout}
        style={[styles.logout_container, {paddingBottom: 50}]}>
        <Logout width={24} height={24} />
        <CustomText ml={30} font="robotoM" color={colors.whiteColor} size={16}>
          Logout
        </CustomText>
      </Pressable>
    </LinearGradient>
  );
};
