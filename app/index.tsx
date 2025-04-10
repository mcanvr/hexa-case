import { View } from 'react-native';
import { PromptSection } from '~/components';

export default function Home(): React.ReactElement {
  return (
    <View className="flex-1 gap-6 py-3">
      <PromptSection maxLength={250} />
    </View>
  );
}
