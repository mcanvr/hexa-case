import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slash } from 'iconsax-react-native';
import { ImageSourcePropType } from 'react-native';

interface LogoStyle {
  name: string;
  title: string;
  image?: ImageSourcePropType | null;
  icon?: React.ReactNode;
}

interface LogoStylesState {
  logoStyles: LogoStyle[];
  selectedLogoStyle: string | null;
}

const initialState: LogoStylesState = {
  logoStyles: [
    {
      name: 'no-style',
      title: 'No Style',
      icon: <Slash size={40} color="#FAFAFA" variant="Linear" />,
    },
    {
      name: 'monogram',
      title: 'Monogram',
      image: require('~/assets//monogram.png'),
    },
    {
      name: 'abstract',
      title: 'Abstract',
      image: require('~/assets/abstract.png'),
    },
    {
      name: 'mascot',
      title: 'Mascot',
      image: require('~/assets/mascot.png'),
    },
  ],
  selectedLogoStyle: 'no-style',
};

const logoStylesSlice = createSlice({
  name: 'logoStyles',
  initialState,
  reducers: {
    setLogoStyles: (state, action: PayloadAction<LogoStyle[]>) => {
      state.logoStyles = action.payload;
    },
    setSelectedLogoStyle: (state, action: PayloadAction<string>) => {
      state.selectedLogoStyle = action.payload;
    },
  },
});

export const { setLogoStyles, setSelectedLogoStyle } = logoStylesSlice.actions;
export default logoStylesSlice.reducer;
