import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LogoGenerationState {
  state: 'PROCESSING' | 'READY' | 'ERROR' | 'INITIAL';
  showInfo: boolean;
  estimatedTime: number;
}

const initialState: LogoGenerationState = {
  state: 'INITIAL',
  showInfo: false,
  estimatedTime: 0,
};

const logoGenerationSlice = createSlice({
  name: 'logoGeneration',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<LogoGenerationState['state']>) => {
      state.state = action.payload;
    },
    setShowInfo: (state, action: PayloadAction<LogoGenerationState['showInfo']>) => {
      state.showInfo = action.payload;
    },
    setEstimatedTime: (state, action: PayloadAction<LogoGenerationState['estimatedTime']>) => {
      state.estimatedTime = action.payload;
    },
  },
});

export const { setState, setShowInfo, setEstimatedTime } = logoGenerationSlice.actions;
export default logoGenerationSlice.reducer;
