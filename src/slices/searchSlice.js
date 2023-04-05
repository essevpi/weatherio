import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  previousInput: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      return {
        ...state,
        input: action.payload,
      };
    },
    savePreviousInput: (state, action) => {
      return {
        ...state,
        previousInput: action.payload,
      };
    },
  },
});

export const { savePreviousInput, changeInput } = searchSlice.actions;
export default searchSlice.reducer;
