import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../api/api';

const initialState: State = {
  addressState: [],
  error: undefined,
};

export const getAddressesDate = createAsyncThunk('addresses/getAddressesDate', (option: string) =>
  api.getAddresses(option)
);

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddressesDate.fulfilled, (state, action) => {
        state.addressState = action.payload;
      })
      .addCase(getAddressesDate.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default addressSlice.reducer;
