import { useEffect } from 'react';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import { CreateButton, LogoGenerationInfo, LogoStyles, PromptSection } from '~/components';
import { RootState } from '~/store';
import { setShowInfo, setState } from '~/store/slices/logoGenerationSlice';

export default function Home(): React.ReactElement {
  const dispatch = useDispatch();
  const { state } = useSelector((state: RootState) => state.logoGeneration);
  const { value, maxLength } = useSelector((state: RootState) => state.prompt);

  useEffect(() => {
    if (state === 'PROCESSING') {
      setTimeout(() => {
        dispatch(setState('READY'));
      }, 30000);
    }
  }, [state]);

  const handleCreate = () => {
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
  };

  return (
    <View className="flex-1 gap-6 py-3">
      <View className="w-full px-6">
        <LogoGenerationInfo
          onPress={() => {
            if (state === 'ERROR') {
              dispatch(setState('PROCESSING'));
              dispatch(setShowInfo(true));
            }
            if (state === 'READY') {
              dispatch(setShowInfo(false));
              dispatch(setState('INITIAL'));
            }
          }}
        />
      </View>
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
