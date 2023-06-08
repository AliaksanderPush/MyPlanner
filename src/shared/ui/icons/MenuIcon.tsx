import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

export function MenuIcon(): JSX.Element {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect x="2" y="16" width="16" height="1" rx="0.5" fill="#2B0601" />
      <Rect x="2" y="10" width="16" height="1" rx="0.5" fill="#2B0601" />
      <Rect x="2" y="4" width="16" height="1" rx="0.5" fill="#2B0601" />
    </Svg>
  );
}
