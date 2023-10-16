import React, {useState} from 'react';
import {Animated, Pressable, View} from 'react-native';
import {CustomButton, CustomText} from '@src/shared/ui';
import {colors} from '@src/app/styles';
import {AuthStackProps} from '@src/app/types';
import {SCREENS} from '@src/app/config';
import {useNavigation} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  styles,
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './ConfirmCode.styles';
import {Props, RenderProps} from './ConfirmCode.props';

const CELL_COUNT = 6;
const {Value, Text: AnimatedText} = Animated;
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}: Props) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
    }),
  ]).start();
};

export const ConfirmCode = () => {
  const navigation = useNavigation<AuthStackProps>();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}: RenderProps) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);
    return (
      <View
        style={styles.cell_container}
        onLayout={getCellOnLayoutHandler(index)}
        key={index}>
        <AnimatedText style={[styles.cell, animatedCellStyle]}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </AnimatedText>
      </View>
    );
  };

  const sendData = () => {
    navigation.navigate(SCREENS.AUTH_RESTORE_PASSWORD);
  };

  return (
    <View style={styles.container}>
      <CustomText
        mb={60}
        center
        font="robotoR"
        size={18}
        color={colors.textColor}>
        Confirm the number. We sent to your email
      </CustomText>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />

      <View style={styles.button_box}>
        <CustomButton
          onPress={sendData}
          text="Continue"
          appearance="containedXL"
        />
      </View>
      <View style={styles.register_conteiner}>
        <Pressable onPress={() => navigation.goBack()}>
          <CustomText size={12} color={colors.contained}>
            Go Back
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};
