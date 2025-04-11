import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LogoStyles, PromptSection } from '~/components';
import { Stars } from '~/components/Icons';
import { StyledComponent } from '~/hooks/useStyledComponent';
import { RootState } from '~/store';

export default function Home(): React.ReactElement {
  const { selectedLogoStyle } = useSelector((state: RootState) => state.logoStyles);
  return (
    <View className="flex-1 gap-6 py-3">
      <PromptSection maxLength={250} />
      <LogoStyles />
      <View className="flex-1"></View>
      <View className="w-full px-6">
        <Pressable className="h-14 w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-full transition-opacity active:opacity-50">
          <LinearGradient
            colors={['#943DFF', '#2938DC']}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            locations={[0.2459, 1]}
            style={StyleSheet.absoluteFill}
          />
          <Text className="font-extrabold text-dark-50">Create</Text>
          <StyledComponent component={Stars} className="h-5 w-5" />
        </Pressable>
      </View>
    </View>
  );
}
