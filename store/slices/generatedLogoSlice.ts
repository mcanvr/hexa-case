import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneratedLogoState {
  logo: string;
  prompt: string;
  style: string;
}

const initialState: GeneratedLogoState = {
  logo: '',
  prompt: '',
  style: '',
};

const generatedLogoSlice = createSlice({
  name: 'generatedLogo',
  initialState,
  reducers: {
    setGeneratedLogo: (state, action: PayloadAction<GeneratedLogoState>) => {
      state.logo = action.payload.logo;
      state.prompt = action.payload.prompt;
      state.style = action.payload.style;
    },
  },
});

export const { setGeneratedLogo } = generatedLogoSlice.actions;
export default generatedLogoSlice.reducer;
