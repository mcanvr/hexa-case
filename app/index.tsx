import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import { ApiFunctions } from '~/api/api';
import { CreateButton, LogoGenerationInfo, LogoStyles, PromptSection } from '~/components';
import { RootState } from '~/store';
import { setGeneratedLogo } from '~/store/slices/generatedLogoSlice';
import { setShowInfo, setState } from '~/store/slices/logoGenerationSlice';

export default function Home(): React.ReactElement {
  const router = useRouter();
  const dispatch = useDispatch();
  const { state } = useSelector((state: RootState) => state.logoGeneration);
  const { value, maxLength } = useSelector((state: RootState) => state.prompt);
  const { selectedLogoStyle } = useSelector((state: RootState) => state.logoStyles);

  const handleCreate = async () => {
    try {
      if (value.trim() === '') {
        showMessage({
          message: 'Error',
          description: 'Please enter a prompt',
          type: 'danger',
          icon: 'auto',
        });
        return;
      }
      if (value.trim().length > maxLength) {
        showMessage({
          message: 'Error',
          description: `Prompt must be less than ${maxLength} characters`,
          type: 'danger',
          icon: 'auto',
        });
        return;
      }
      dispatch(setState('PROCESSING'));
      dispatch(setShowInfo(true));
      const generatedLogo = await ApiFunctions.createLogo({
        prompt: value,
        logo_style: selectedLogoStyle ?? '',
      });
      dispatch(
        setGeneratedLogo({
          logo: generatedLogo.image_url,
          prompt: generatedLogo.prompt,
          style: generatedLogo.logo_style,
        })
      );
      dispatch(setState('READY'));
    } catch (error) {
      console.log(error);
      dispatch(setState('ERROR'));
      dispatch(setShowInfo(true));
    }
  };

  return (
    <View className="flex-1 gap-6 py-3">
      <LogoGenerationInfo
        onPress={async () => {
          if (state === 'ERROR') {
            dispatch(setState('INITIAL'));
            dispatch(setShowInfo(false));
          }
          if (state === 'READY') {
            dispatch(setShowInfo(false));
            dispatch(setState('INITIAL'));
            router.push('/designDetail');
          }
        }}
      />
      <PromptSection maxLength={250} />
      <LogoStyles />
      <View className="flex-1"></View>
      <View className="w-full px-6">
        <CreateButton
          disabled={state === 'PROCESSING'}
          onPress={handleCreate}
          onLongPress={() => {
            dispatch(setState('ERROR'));
            dispatch(setShowInfo(true));
          }}
        />
      </View>
    </View>
  );
}
