import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from './CustomButton.props';
import classNames from 'classnames-react-native';
import {styles} from './CustomButton.styles';

export const CustomButton = ({
  onPress,
  text,
  appearance,
}: IButtonProps): JSX.Element => {
  const styleBtn = classNames(
    styles.button,
    [styles.containedXL, appearance === 'containedXL'],
    [styles.elevatedXL, appearance === 'elevatedXL'],
    [styles.sizeXL, appearance === 'containedXL' || 'elevatedXL'],
  );

  const styleText = classNames(styles.button, [
    styles.containedXlText,
    appearance === 'containedXL' || 'elevatedXL',
  ]);

  return (
    <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
};
