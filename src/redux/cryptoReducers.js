import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.coinstats.app/public/v1/coins';

export const getCryptos = createAsyncThunk(
  'crypto/getCrypto',
  async () => {
    const response = await fetch(BASE_URL);
    const { coins } = await response.json();
    return coins;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptos.fulfilled, (state, action) => [...state, ...action.payload]);
  },
});

export default cryptoSlice.reducer;