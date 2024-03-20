import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    fetchQuestionsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchQuestionsSuccess(state, action) {
      state.loading = false;
      state.questions = action.payload;
    },
    fetchQuestionsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchQuestionsStart,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
} = questionSlice.actions;

export default questionSlice.reducer;
