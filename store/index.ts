import { configureStore } from '@reduxjs/toolkit';
import generatedLogoReducer from './slices/generatedLogoSlice';
import logoGenerationReducer from './slices/logoGenerationSlice';
import logoStylesReducer from './slices/logoStylesSlice';
import promptReducer from './slices/promptSlice';

export const store = configureStore({
  reducer: {
    prompt: promptReducer,
    logoStyles: logoStylesReducer,
    logoGeneration: logoGenerationReducer,
    generatedLogo: generatedLogoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
