import { useRouter } from 'expo-router';
import { useEffect } from 'react';
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

  useEffect(() => {
    if (state === 'PROCESSING') {
      setTimeout(() => {
        dispatch(setState('READY'));
      }, 30000);
    }
  }, [state]);

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
      const generatedLogo = await ApiFunctions.createLogo({
        prompt: value,
        logo_style: selectedLogoStyle ?? '',
        image_url:
          'https://s3-alpha-sig.figma.com/img/9b00/3257/5c903ca289a9577cccbc289a6ed0e1c7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ik8JN4VnrjlnD~15noMHk6WVdlGVuBtdv1U-ik6NHhiShcJvHhhaJSMAWpUk9u1AvMW163XkK4Hhz5k~q7Xfz4Ofc06Vo94F3kzRT~bgPCc3ygj7AoZh1MamkS-G2-moF43gea1ePLy2EoZZiRL70b6xCDSR9~wHmqjGg56F6DGlMu4zXEA1JDb6WiV2PK2PTswfwE5C5o~VPbXZhqUs1V01mcQ7cCmckE48hpQnEzADD~jtCWc1mDuj~OaTYyG6Y97PF3Vj-vM~0EtDJnGisPWZdLr50H6ARuUjgDgzIEG0qVM2C~klSMREy6NT9rQTiOkWBFP3UoTxIuSHhD~yGg__',
      });
      dispatch(
        setGeneratedLogo({
          logo: generatedLogo.image_url,
          prompt: generatedLogo.prompt,
          style: generatedLogo.logo_style,
        })
      );
      dispatch(setState('PROCESSING'));
      dispatch(setShowInfo(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 gap-6 py-3">
      <LogoGenerationInfo
        onPress={async () => {
          if (state === 'ERROR') {
            dispatch(setState('PROCESSING'));
            dispatch(setShowInfo(true));
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
