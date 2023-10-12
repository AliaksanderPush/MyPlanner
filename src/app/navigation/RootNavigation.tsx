import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GeneralNavigation} from './GeneralNavigation';
import {WithSplashScreen} from '@src/screens/splash/withSplash/withSplash';
import {
  useFetchUserQuery,
  useLazyFetchUserQuery,
} from '@src/entities/user/model/userApi';
import {useAppSelector} from '../store';
import {selectAuthInfo} from '@src/entities/auth';

export const RootNavigation = (): JSX.Element => {
  const [isAppReady, setIsAppReady] = useState<boolean>(true);
  const token = useAppSelector(selectAuthInfo);
  console.log('token in root=>', token);

  //const data = useFetchUserQuery(undefined, {skip: token !== null});
  //console.log('user in root=>', data);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <NavigationContainer>
      <WithSplashScreen isAppReady={isAppReady}>
        <GeneralNavigation />
      </WithSplashScreen>
    </NavigationContainer>
  );
};
