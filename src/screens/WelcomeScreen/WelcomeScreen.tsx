import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Block, Grid, Section} from 'react-native-responsive-layout';
import {styles} from './WelcomeScreen.styles';

export const WelcomeScreen = () => {
  return (
    <Grid stretchable>
      <Section>
        <Block>
          <View style={{height: 150}}>
            <Text style={styles.text}>Header</Text>
          </View>
        </Block>
      </Section>
      <Section stretch>
        <Block size="stretch">
          <View
            style={[{backgroundColor: '#91c2fd'}, styles.flexibleContainer]}>
            <Text style={styles.text}>Content</Text>
          </View>
        </Block>
      </Section>
      <Section>
        <Block>
          <View style={{height: 150}}>
            <Text style={styles.text}>Footer</Text>
          </View>
        </Block>
      </Section>
    </Grid>
  );
};
