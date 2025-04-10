import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PromptState {
  value: string;
  maxLength: number;
  supriseMe: (text: string) => void;
}

const initialState: PromptState = {
  value: '',
  maxLength: 200,
  supriseMe: () => {},
};

const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setMaxLength: (state, action: PayloadAction<number>) => {
      state.maxLength = action.payload;
    },
    resetPrompt: (state) => {
      state.value = '';
      state.maxLength = 200;
    },
    supriseMe: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPrompt, setMaxLength, resetPrompt, supriseMe } = promptSlice.actions;
export default promptSlice.reducer;
