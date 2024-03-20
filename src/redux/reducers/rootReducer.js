import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../Slices/themeSlice';
import authReducer from '../Slices/authSlice';
import cameraPermissionReducer from '../Slices/cameraPermissionSlice';
import questionReducer from '../Slices/questionSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  cameraPermission: cameraPermissionReducer,
  question: questionReducer,
});

export default rootReducer;
