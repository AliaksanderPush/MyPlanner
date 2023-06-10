export interface IButtonProps {
  text: string;
  appearance: 'containedXL' | 'outlined' | 'elevatedXL';
  onPress: () => Promise<void> | void;
}
