import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { setSelectedLogoStyle } from '~/store/slices/logoStylesSlice';
import { LogoStyleItem } from '..';

export default function LogoStyles(): React.ReactElement {
  const { logoStyles, selectedLogoStyle } = useSelector((state: RootState) => state.logoStyles);
  const dispatch = useDispatch();
  return (
    <View className="w-full gap-3">
      <View className="w-full px-6">
        <Text className="font-extrabold text-xl text-dark-50">Logo Styles</Text>
      </View>
      <ScrollView
        horizontal
        className="w-full"
        contentContainerClassName="gap-5 px-6"
        showsHorizontalScrollIndicator={false}>
        {logoStyles.map((logoStyle) => (
          <LogoStyleItem
            key={logoStyle.name}
            title={logoStyle.title}
            icon={logoStyle.icon}
            image={logoStyle.image}
            isSelected={selectedLogoStyle === logoStyle.name}
            onPress={() => dispatch(setSelectedLogoStyle(logoStyle.name))}
          />
        ))}
      </ScrollView>
    </View>
  );
}
