import { Pressable } from 'react-native';

import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import { Copy } from 'iconsax-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';

export default function PromptDetail(): React.ReactElement {
  const { prompt, style } = useSelector((state: RootState) => state.generatedLogo);
  const { logoStyles } = useSelector((state: RootState) => state.logoStyles);
  return (
    <View className="px-6">
      <View className="w-full gap-3 overflow-hidden rounded-xl px-4 py-4">
        <LinearGradient
          colors={['#27272A', '#27272A']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
        <LinearGradient
          colors={['rgba(148, 61, 255, 0.05)', 'rgba(41, 56, 220, 0.05)']}
          locations={[0.2459, 1]}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          style={StyleSheet.absoluteFillObject}
        />
        <View className="flex-row items-center">
          <Text className="flex-1 font-bold text-white">Prompt</Text>
          <Pressable
            onPress={() => {
              Clipboard.setStringAsync(prompt).then(() => {
                showMessage({
                  message: 'Success',
                  description: 'Prompt copied to clipboard',
                  type: 'success',
                  icon: 'auto',
                });
              });
            }}
            className="flex-row items-center gap-1.5 active:opacity-50">
            <Copy size="16" color="#A1A1AA" />
            <Text className="text-dark-400 text-xs font-normal">Copy</Text>
          </Pressable>
        </View>
        <Text className="font-normal text-dark-50">{prompt}</Text>
        <View className="w-full flex-row">
          <View className="flex-row items-center gap-1 rounded-full bg-[#FAFAFA1A] px-2 py-1">
            <Text className="text-xs font-normal text-dark-50">
              {logoStyles.find((logoStyle) => logoStyle.name === style)?.title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
