import { LinearGradient } from 'expo-linear-gradient';
import { InfoCircle } from 'iconsax-react-native';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { setEstimatedTime } from '~/store/slices/logoGenerationSlice';
import { cn } from '~/utils/classnames';
import { Case, Switch } from '~/utils/switch-case';

export interface LogoGenerationInfoProps {
  onPress?: () => void;
}

export default function LogoGenerationInfo({
  onPress,
}: LogoGenerationInfoProps): React.ReactElement {
  const dispatch = useDispatch();
  const { state, showInfo, estimatedTime } = useSelector(
    (state: RootState) => state.logoGeneration
  );
  const { logo } = useSelector((state: RootState) => state.generatedLogo);

  useEffect(() => {
    if (state === 'PROCESSING') {
      dispatch(setEstimatedTime(30));
    }
  }, [state]);

  if (!showInfo) return <></>;

  return (
    <View className="w-full px-6">
      <Pressable
        className="h-[70px] w-full flex-row overflow-hidden rounded-2xl transition-opacity active:opacity-50"
        onPress={onPress}
        disabled={state === 'PROCESSING'}>
        <View
          className={cn('h-[70px] w-[70px] items-center justify-center overflow-hidden', {
            'bg-[#18181B]': state === 'PROCESSING',
            'bg-dark-50': state === 'READY',
            'bg-[#ef4444b3]': state === 'ERROR',
          })}>
          <Switch>
            <Case condition={state === 'PROCESSING'}>
              <LottieView
                source={require('~/assets/loading-animation.json')}
                autoPlay
                loop
                style={StyleSheet.absoluteFillObject}
              />
            </Case>
            <Case condition={state === 'ERROR'}>
              <InfoCircle size="32" color="#FAFAFA" variant="Bold" />
            </Case>
            <Case condition={state === 'READY'}>
              <Image
                source={logo ? { uri: logo } : require('~/assets/logo.jpg')}
                className="absolute h-full w-full"
                resizeMode="cover"
              />
            </Case>
          </Switch>
        </View>
        <View
          className={cn('flex-1 px-3 py-4', {
            'bg-[#EF4444]': state === 'ERROR',
          })}>
          <Switch>
            <Case condition={state === 'PROCESSING'}>
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
            </Case>
            <Case condition={state === 'READY'}>
              <LinearGradient
                colors={['#943DFF', '#2938DC']}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                locations={[0.2459, 1]}
                style={StyleSheet.absoluteFill}
              />
            </Case>
          </Switch>
          <View className="w-full gap-1">
            <Text className="font-extrabold text-dark-50">
              {state === 'PROCESSING'
                ? 'Creating Your Design...'
                : state === 'READY'
                  ? 'Your Design is Ready!'
                  : 'Oops, something went wrong!'}
            </Text>
            <Text
              className={cn('font-medium text-sm', {
                'text-dark-500': state === 'PROCESSING',
                'text-dark-300': state === 'READY' || state === 'ERROR',
              })}>
              {state === 'PROCESSING'
                ? `Ready in ${estimatedTime} seconds`
                : state === 'READY'
                  ? 'Tap to see it.'
                  : 'Click to try again.'}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
