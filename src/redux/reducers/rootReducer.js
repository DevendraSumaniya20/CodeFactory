import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../Slices/themeSlice';
import authReducer from '../Slices/authSlice';
import cameraPermissionReducer from '../Slices/cameraPermissionSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  cameraPermission: cameraPermissionReducer,
});

export default rootReducer;
