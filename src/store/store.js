import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../features/Common/commonSlice';

export const store = configureStore({
  reducer: {
    counter: commonSlice,
  },
});

export default store;
