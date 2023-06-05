import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import addressSlice from '../features/addressSlice';

const store = configureStore({
  reducer: {
    addressesState: addressSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
