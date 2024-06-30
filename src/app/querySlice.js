import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: '',
  year: '',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export const { setGenre, setYear } = querySlice.actions;

export default querySlice.reducer;
