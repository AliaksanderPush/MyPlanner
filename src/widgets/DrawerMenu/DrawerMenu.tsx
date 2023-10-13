import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '@src/app/styles';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import Logout from '@src/shared/assets/icons/logout.svg';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './DrawerMenu.styles';
import {CustomText} from '@src/shared/ui';
import {cleatAuth, selectAuthInfo, useLogoutMutation} from '@src/entities/auth';
import {useAppDispatch, useAppSelector} from '@src/app/store';
import {removeToken} from '@src/shared/storage';
import {clearUser} from '@src/entities/user';

export const DrawerMenu = (props: DrawerContentComponentProps): JSX.Element => {
  const token = useAppSelector(selectAuthInfo);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [logout, {error, isLoading}] = useLogoutMutation();

  const handleClose = () => {
    props.navigation.closeDrawer();
  };

  console.log('logout error=>', error);

  const handleLogout = async () => {
    if (token?.refreshToken) {
      console.log('logout work');
      logout({refreshToken: token?.refreshToken})
        .then(() => removeToken())
        .catch(e => console.log('stor err=>', e));
    }
    dispatch(cleatAuth());
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
