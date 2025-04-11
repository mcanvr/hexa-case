import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { LogoStyles, PromptSection } from '~/components';
import { RootState } from '~/store';
export default function Home(): React.ReactElement {
  const { selectedLogoStyle } = useSelector((state: RootState) => state.logoStyles);
  return (
    <View className="flex-1 gap-6 py-3">
      <PromptSection maxLength={250} />
      <LogoStyles />
    </View>
  );
}
