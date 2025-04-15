import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PromptState {
  value: string;
  maxLength: number;
  supriseMe: (text: string) => void;
  supriseMePrompts: {
    prompt: string;
    style: string;
  }[];
}

const initialState: PromptState = {
  value: '',
  maxLength: 200,
  supriseMe: () => {},
  supriseMePrompts: [
    {
      prompt: 'A sleek and elegant logo for a wellness mobile app',
      style: 'no-style',
    },
    {
      prompt: 'A clean and bold logo for a fintech platform',
      style: 'no-style',
    },
    {
      prompt: 'A minimal logo for a digital marketing agency',
      style: 'no-style',
    },
    {
      prompt: 'A modern logo for a mobile banking app',
      style: 'no-style',
    },
    {
      prompt: 'A friendly and colorful logo for a pet care brand',
      style: 'no-style',
    },
    {
      prompt: 'A luxury monogram logo using the letters M and V',
      style: 'monogram',
    },
    {
      prompt: 'A modern monogram logo based on the letter A for a design studio',
      style: 'monogram',
    },
    {
      prompt: 'A sporty monogram logo using the letters S and P',
      style: 'monogram',
    },
    {
      prompt: 'A minimalist monogram using L and A for a photography business',
      style: 'monogram',
    },
    {
      prompt: 'A sharp, geometric monogram with D and M for a creative agency',
      style: 'monogram',
    },
    {
      prompt: 'An abstract geometric logo for an innovative tech company',
      style: 'abstract',
    },
    {
      prompt: 'A futuristic abstract logo representing data and artificial intelligence',
      style: 'abstract',
    },
    {
      prompt: 'A colorful abstract logo symbolizing global connectivity',
      style: 'abstract',
    },
    {
      prompt: 'An abstract flame logo for an energy drink brand',
      style: 'abstract',
    },
    {
      prompt: 'A fragmented geometric shape logo for a cybersecurity company',
      style: 'abstract',
    },
    {
      prompt: 'A strong yet friendly lion mascot logo for a sports team',
      style: 'mascot',
    },
    {
      prompt: 'A cute owl mascot logo for a kids educational platform',
      style: 'mascot',
    },
    {
      prompt: 'A dog mascot logo for a veterinary clinic',
      style: 'mascot',
    },
    {
      prompt: 'A fun cat mascot logo for a social media app',
      style: 'mascot',
    },
    {
      prompt: 'A heroic eagle mascot logo for a delivery service',
      style: 'mascot',
    },
  ],
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
