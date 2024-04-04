import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './BalanceSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    // Add more reducers if needed
  },
});
