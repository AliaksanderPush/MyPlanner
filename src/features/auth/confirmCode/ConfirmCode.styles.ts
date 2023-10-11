import {
  colors,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '@src/app/styles';
import {Platform, StyleSheet} from 'react-native';

export const CELL_SIZE = moderateScale(40);
export const CELL_BORDER_RADIUS = moderateScale(10);
export const DEFAULT_CELL_BG_COLOR = colors.whiteColor;
export const NOT_EMPTY_CELL_BG_COLOR = colors.contained;
export const ACTIVE_CELL_BG_COLOR = colors.whiteColor;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(60),
  },
  button_box: {
    paddingTop: moderateScaleVertical(60),
  },

  register_conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: moderateScaleVertical(30),
  },
  codeFieldRoot: {
    height: CELL_SIZE,
    justifyContent: 'center',
  },

  cell_container: {
    borderRadius: CELL_BORDER_RADIUS,
    marginHorizontal: moderateScale(8),
  },

  cell: {
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: textScale(30),
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: colors.textColor,
    backgroundColor: colors.whiteColor,
  },
});
