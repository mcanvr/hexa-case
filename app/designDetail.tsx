import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PromptDetail } from '~/components';
import { Close } from '~/components/Icons';
import { StyledComponent } from '~/hooks/useStyledComponent';
import { RootState } from '~/store';
import { setGeneratedLogo } from '~/store/slices/generatedLogoSlice';
import { setSelectedLogoStyle } from '~/store/slices/logoStylesSlice';
import { setPrompt } from '~/store/slices/promptSlice';

export default function DesignDetail(): React.ReactElement {
  const router = useRouter();
  const { logo } = useSelector((state: RootState) => state.generatedLogo);
  const logoSource = logo ? { uri: logo } : require('~/assets/logo.jpg');
  const dispatch = useDispatch();

  return (
    <View className="flex-1 gap-6 py-3">
      <View className="h-topbar w-full flex-row items-center px-6">
        <Text className="flex-1 font-extrabold text-xl text-white">Your Design</Text>
        <Pressable
          onPress={() => {
            dispatch(
              setGeneratedLogo({
                logo: '',
                prompt: '',
                style: '',
              })
            );
            dispatch(setPrompt(''));
            dispatch(setSelectedLogoStyle('no-style'));
            router.back();
          }}
          className="h-5 w-5 active:opacity-50">
          <StyledComponent component={Close} className="h-5 w-5" />
        </Pressable>
      </View>
      <View className="px-6">
        <View className="h-[342px] w-full rounded-2xl bg-[##E1E1E1]">
          <Image source={logoSource} className="h-full w-full rounded-2xl" />
        </View>
      </View>
      <PromptDetail />
    </View>
  );
}
