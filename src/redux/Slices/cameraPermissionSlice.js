import {createSlice} from '@reduxjs/toolkit';

const cameraPermissionSlice = createSlice({
  name: 'cameraPermission',
  initialState: {
    camera: false,
  },
  reducers: {
    cameraPermissionGiven: state => {
      state.camera = true;
    },
  },
});

export const {cameraPermissionGiven} = cameraPermissionSlice.actions;

export default cameraPermissionSlice.reducer;
