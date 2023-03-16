import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/searchSlice";
import weatherSlice from '../slices/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice
  }
});

export default store;