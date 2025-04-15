import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { setSelectedLogoStyle } from '~/store/slices/logoStylesSlice';
import { setMaxLength, setPrompt } from '~/store/slices/promptSlice';
import { cn } from '~/utils/classnames';

export interface PromptSectionProps {
  maxLength?: number;
}

export default function PromptSection({ maxLength }: PromptSectionProps): React.ReactElement {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const {
    value: prompt,
    maxLength: maxLengthValue,
    supriseMePrompts,
  } = useSelector((state: RootState) => state.prompt);

  useEffect(() => {
    if (maxLength) {
      dispatch(setMaxLength(maxLength));
    }
  }, [maxLength]);

  const handlePromptChange = (text: string) => {
    dispatch(setPrompt(text));
  };

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * supriseMePrompts.length);
    const randomPrompt = supriseMePrompts[randomIndex];

    dispatch(setPrompt(randomPrompt.prompt));
    dispatch(setSelectedLogoStyle(randomPrompt.style));
  };

  return (
    <View className="w-full gap-3 px-6">
      <View className="flex-row items-center">
        <Text className="flex-1 font-extrabold text-xl text-dark-50">Enter Your Prompt</Text>
        <Pressable
          onPress={handleSurpriseMe}
          className="flex-row items-center gap-2 transition-opacity active:opacity-50">
          <Text className="text-sm font-normal text-dark-50">🎲 Surprise me</Text>
        </Pressable>
      </View>
      <View
        style={{
          height: 175,
          borderRadius: 16,
          overflow: 'hidden',
        }}
        className={cn('h-44 w-full overflow-hidden rounded-2xl border', {
          'border-dark-50': isFocused,
          'border-[#27272A]': !isFocused,
          'border-red-500': prompt.length > maxLengthValue,
        })}>
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
        <BlurView
          style={{
            height: 175,
          }}
          intensity={15}
          className="relative w-full items-start px-4 py-3">
          <View className="h-full w-full pb-7">
            <TextInput
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={prompt}
              onChangeText={handlePromptChange}
              selectionColor={'white'}
              placeholder="A blue lion logo reading 'HEXA' in bold letters"
              multiline
              placeholderTextColor="#71717A"
              className="h-full w-full pr-12 font-normal leading-5 text-white caret-white"
            />
          </View>
          <View className="absolute bottom-3 left-3 h-5 w-full flex-row items-center">
            <Text className="text-xs font-normal text-dark-500">
              {prompt.length}/{maxLength}
            </Text>
          </View>
        </BlurView>
      </View>
    </View>
  );
}
