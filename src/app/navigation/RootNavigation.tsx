import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GeneralNavigation} from './GeneralNavigation';

export const RootNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <GeneralNavigation />
    </NavigationContainer>
  );
};
