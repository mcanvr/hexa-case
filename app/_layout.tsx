import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import i18n from '~/locales/i18n';
import { store } from '~/store';
import '../global.css';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'GeistMono-Black': require('~/assets/fonts/GeistMono/GeistMono-Black.ttf'),
    'GeistMono-Bold': require('~/assets/fonts/GeistMono/GeistMono-Bold.ttf'),
    'GeistMono-Light': require('~/assets/fonts/GeistMono/GeistMono-Light.ttf'),
    'GeistMono-Regular': require('~/assets/fonts/GeistMono/GeistMono-Regular.ttf'),
    'GeistMono-SemiBold': require('~/assets/fonts/GeistMono/GeistMono-SemiBold.ttf'),
    'GeistMono-Thin': require('~/assets/fonts/GeistMono/GeistMono-Thin.ttf'),
    'GeistMono-UltraBlack': require('~/assets/fonts/GeistMono/GeistMono-UltraBlack.ttf'),
    'GeistMono-UltraLight': require('~/assets/fonts/GeistMono/GeistMono-UltraLight.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Slot />
      </Provider>
    </I18nextProvider>
  );
}
