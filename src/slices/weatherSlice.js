import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL_WEATHER } from '../utils/constants';

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchByCity',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {      
      const response = await fetch(
        `${BASE_URL_WEATHER}/weather?q=${payload}&units=metric&appid=${API_KEY}`
      )
      .then(res => res.json())

      if (response.cod === '404')
        return response;      
      
      let filteredResult = {
        coord: response.coord,
        weather: response.weather[0],
        various: {
          main: response.main,
          wind: response.wind,
          rain: response.rain,
          clouds: response.clouds,
        },        
        sys: response.sys,
        name: response.name,
        timezone: response.timezone,
        cod: response.cod
      }

      console.log('filtered',filteredResult)
      console.log('res', response)

      return filteredResult;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  loading: true,
  error: 'No error',
  data: null
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCity.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(fetchWeatherByCity.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = 'No error';
    }),
    builder.addCase(fetchWeatherByCity.rejected, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = 'Error';
    })
  }
});

export default weatherSlice.reducer;