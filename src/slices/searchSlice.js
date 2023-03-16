import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.input = action.payload;
    }
  }
});

export const { changeInput } = searchSlice.actions;
export default searchSlice.reducer;