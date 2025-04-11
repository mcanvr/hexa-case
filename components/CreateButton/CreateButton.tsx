import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';
import { StyledComponent } from '~/hooks/useStyledComponent';
import { cn } from '~/utils/classnames';
import { Stars } from '../Icons';

export interface CreateButtonProps {
  disabled?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function CreateButton({
  onPress,
  onLongPress,
  disabled,
}: CreateButtonProps): React.ReactElement {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      className={cn(
        'h-14 w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-full transition-opacity active:opacity-50',
        {
          'opacity-50': disabled,
        }
      )}>
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
  );
}
