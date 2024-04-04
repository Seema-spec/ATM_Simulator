import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
    notes: { 100: 0, 500: 0, 1000: 0, 2000: 0 }
  },
  reducers: {
   deposit: (state, action) => {
      state.value += action.payload.amount;
      state.notes[action.payload.note] += parseInt(action.payload.numNotes); 
    },
    withdraw: (state, action) => {
      const { amount, note } = action.payload;
      state.value -= amount;
      for (const [denomination, numNotes] of Object.entries(note)) {
        state.notes[denomination] -= numNotes;
      }
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

export default balanceSlice.reducer;
