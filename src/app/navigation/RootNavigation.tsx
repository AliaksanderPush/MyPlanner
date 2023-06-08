import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GeneralNavigation} from './GeneralNavigation';
import {WithSplashScreen} from '@src/app/providers';

export const RootNavigation = (): JSX.Element => {
  const [isAppReady, setIsAppReady] = useState<boolean>(true);

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
