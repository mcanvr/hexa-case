import { configureStore } from '@reduxjs/toolkit';
import promptReducer from './slices/promptSlice';

export const store = configureStore({
  reducer: {
    prompt: promptReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
