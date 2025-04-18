import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/manrope';
import { Slot, SplashScreen, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import { Topbar } from '~/components';
import i18n from '~/locales/i18n';
import { store } from '~/store';
import { Case, Switch } from '~/utils/switch-case';
import '../global.css';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const pathName = usePathname();
  const [loaded, error] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1 bg-dark-1000">
          <Image
            style={{
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
            }}
            source={require('~/assets/bg-vector.png')}
            className="absolute"
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="pt-safe pb-safe-offset-3 flex-1 ">
              <StatusBar barStyle="light-content" />
              <Switch>
                <Case condition={pathName === '/'}>
                  <Topbar title="AI Logo" />
                </Case>
              </Switch>
              <Slot />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Provider>
      <FlashMessage position="top" />
    </I18nextProvider>
  );
}
