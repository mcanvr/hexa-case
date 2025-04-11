import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { cn } from '~/utils/classnames';

export interface LogoStyleItemProps {
  title: string;
  onPress: () => void;
  isSelected: boolean;
  image?: ImageSourcePropType | null;
  icon?: React.ReactNode;
}

export default function LogoStyleItem({
  title,
  onPress,
  isSelected,
  image,
  icon,
}: LogoStyleItemProps): React.ReactElement {
  return (
    <Pressable
      className="w-24 items-center justify-center gap-1.5 transition-opacity active:opacity-50"
      onPress={onPress}>
      <View
        className={cn('h-24 w-24 items-center justify-center overflow-hidden rounded-2xl', {
          'border-2 border-dark-50': isSelected,
        })}>
        {!image ? (
          <>
            <LinearGradient colors={['#2938DC', '#2938DC']} style={StyleSheet.absoluteFill} />
            <LinearGradient
              colors={['rgba(39,39,42,0.5)', 'rgba(39,39,42,0.5)']}
              style={StyleSheet.absoluteFill}
            />
          </>
        ) : null}
        {image ? <Image source={image} className="h-24 w-24" /> : null}
        {icon ? icon : null}
      </View>
      <Text
        className={cn('text-sm', {
          'font-bold text-dark-50': isSelected,
          'font-normal text-dark-500': !isSelected,
        })}>
        {title}
      </Text>
    </Pressable>
  );
}
