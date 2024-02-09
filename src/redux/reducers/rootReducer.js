import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../Slices/themeSlice';
import authReducer from '../Slices/authSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;
