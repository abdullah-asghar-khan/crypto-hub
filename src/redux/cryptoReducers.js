import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.coinstats.app/public/v1/coins';

const cleanData = (arr) => {
  let array = [...arr];
  array = array.map((item) => {
    const data = { ...item };
    data.volume = Number(data.volume).toFixed(2);
    data.availableSupply = Number(data.availableSupply).toFixed(2);
    data.totalSupply = Number(data.totalSupply).toFixed(2);
    data.priceChange1h = Number(data.priceChange1h).toFixed(2);
    data.priceChange1d = Number(data.priceChange1d).toFixed(2);
    data.priceChange1w = Number(data.priceChange1w).toFixed(2);
    return data;
  });
  return [...array];
};

export const getCryptos = createAsyncThunk(
  'crypto/getCrypto',
  async () => {
    const response = await fetch(BASE_URL);
    const { coins } = await response.json();
    return cleanData(coins);
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
