import { Pressable, Text, View } from 'react-native';

export default function Home(): React.ReactElement {
  return (
    <View className="flex-1 gap-6 py-3">
      <View className="w-full gap-3 px-6">
        <View className="flex-row items-center">
          <Text className="text-dark-50 flex-1 text-xl font-extrabold">Enter Your Prompt</Text>
          <Pressable className="flex-row items-center gap-2 transition-opacity active:opacity-50">
            <Text className="text-dark-50 font-normal text-sm">🎲 Surprise me</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
