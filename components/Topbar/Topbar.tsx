import { Text, View } from 'react-native';
import { cn } from '~/utils/classnames';

export interface TopbarProps {
  title: string;
  className?: string;
  textClassName?: string;
}

export default function Topbar({
  title,
  className,
  textClassName,
}: TopbarProps): React.ReactElement {
  return (
    <View className={cn('h-topbar w-full items-center justify-center', className)}>
      <Text
        className={cn(
          'text-topbar-logo leading-topbar-logo text-base font-extrabold text-white',
          textClassName
        )}>
        {title}
      </Text>
    </View>
  );
}
