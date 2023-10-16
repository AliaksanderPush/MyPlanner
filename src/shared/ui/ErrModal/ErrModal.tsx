import {colors, moderateScale} from '@src/app/styles';
import {CustomButton} from '@src/shared/ui/CustomButton/CustomButton';
import {CustomText} from '@src/shared/ui/CustomText/CustomText';
import {Modal, Portal} from 'react-native-paper';
import {IErrModalProps} from './ErrModal.props';

export const ErrModal = ({
  message,
  show,
  title,
  hideModal,
}: IErrModalProps): JSX.Element => {
  const containerStyle = {
    width: moderateScale(300),
    backgroundColor: colors.whiteColor,
    padding: moderateScale(30),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  };

  return (
    <Portal>
      <Modal
        visible={show}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle as any}>
        <CustomText
          mb={10}
          center
          color={colors.textColor}
          font="robotoM"
          size={18}>
          {title}
        </CustomText>
        <CustomText
          mb={10}
          center
          color={colors.textColor}
          font="robotoM"
          size={16}>
          {message}
        </CustomText>
        <CustomButton text="OK" appearance="containedXL" onPress={hideModal} />
      </Modal>
    </Portal>
  );
};
