import React from 'react';
import {View, Image} from 'react-native';
import {Block, Grid, Section} from 'react-native-responsive-layout';
import {CustomButton, CustomText} from '@src/shared/ui';
import {path} from '@src/app/config';
import {WelcomProps} from './WelcomeScreen.props';
import {SCREENS} from '@src/app/navigation';
import {styles} from './WelcomeScreen.styles';

export const WelcomeScreen = ({navigation}: WelcomProps) => {
  const handleContinue = () => {
    navigation.navigate(SCREENS.AUTH_MY_PLANNER);
  };

  return (
    <Grid stretchable>
      <Section>
        <Block>
          <View style={styles.top_container}>
            <CustomText font="robotoM" size={24}>
              Welcome Back
            </CustomText>
          </View>
        </Block>
      </Section>
      <Section stretch>
        <Block size="stretch">
          <View style={styles.flexibleContainer}>
            <Image style={styles.image} source={path.goals} />
          </View>
        </Block>
      </Section>
      <Section>
        <Block>
          <View style={styles.bottom_container}>
            <CustomButton
              onPress={handleContinue}
              text="CONTINUE"
              appearance="containedXL"
            />
          </View>
        </Block>
      </Section>
    </Grid>
  );
};
