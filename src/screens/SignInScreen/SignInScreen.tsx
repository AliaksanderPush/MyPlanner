import React from 'react';
import {View, Text} from 'react-native';
import {AuthLayot} from '@src/widgets';
import {Block, Grid, Section} from 'react-native-responsive-layout';
import {styles} from './SignInScreen.styles';
import {CustomButton, CustomInput} from '@src/shared/ui';

export const SignInScreen = () => {
  const handleGoToSignIn = () => {};
  const handleGoToSignUp = () => {
    //
  };

  return (
    <AuthLayot loading={false}>
      <View style={styles.button_container}>
        <Grid stretchable>
          <Section>
            <Block>
              <View style={styles.button_box}>
                <CustomInput />
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
