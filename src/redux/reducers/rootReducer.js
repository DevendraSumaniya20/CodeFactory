import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../Slices/themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
