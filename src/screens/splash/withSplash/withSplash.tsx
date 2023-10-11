import {SplashScreen} from '@src/screens/splash/SplashScreen/SplashScreen';
import {ISplashProps} from './withSplash.props';

export function WithSplashScreen({
  children,
  isAppReady,
}: ISplashProps): JSX.Element {
  return (
    <>
      {isAppReady && children}
      <SplashScreen isAppReady={isAppReady} />
    </>
  );
}
