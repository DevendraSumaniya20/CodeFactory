import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkmode: false,
    colorScheme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkmode = !state.isDarkmode;
      state.colorScheme = state.isDarkmode ? 'dark' : 'light';
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
