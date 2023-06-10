import React from 'react';
import {View} from 'react-native';
import {AuthLayot} from '@src/widgets';
import {Block, Grid, Section} from 'react-native-responsive-layout';
import {styles} from './MyPlannerScreen.styles';
import {CustomButton} from '@src/shared/ui';
import {MyPlannerProps} from './MyPlannerScreen.props';
import {SCREENS} from '@src/app/navigation';

export const MyPlannerScreen = ({navigation}: MyPlannerProps): JSX.Element => {
  const handleGoToSignIn = () => {
    console.log('Wort');
    navigation.navigate(SCREENS.AUTH_SIGNIN);
  };
  const handleGoToSignUp = () => {
    navigation.navigate(SCREENS.AUTH_SIGNUP);
  };

  return (
    <AuthLayot loading={false}>
      <View style={styles.button_container}>
        <Grid stretchable>
          <Section>
            <Block>
              <View style={styles.button_box}>
                <CustomButton
                  onPress={handleGoToSignIn}
                  text="SIGN IN"
                  appearance="containedXL"
                />
                <CustomButton
                  onPress={handleGoToSignUp}
                  text="SIGN UP"
                  appearance="elevatedXL"
                />
              </View>
            </Block>
          </Section>
          <Section stretch>
            <Block>
              <View style={styles.flexibleBox}></View>
            </Block>
          </Section>
        </Grid>
      </View>
    </AuthLayot>
  );
};
