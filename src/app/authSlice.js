import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiSlice } from '../api/api.js';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const result = await dispatch(apiSlice.endpoints.loginUser.initiate(credentials)).unwrap();
      return result;
    } catch (err) {
      return rejectWithValue(err.data || err.message);
    }
  },
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const savedToken = localStorage.getItem('token');
if (savedToken) {
  initialState.isAuthenticated = true;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        state.loading = false;
        localStorage.setItem('token', JSON.stringify(payload.token));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Ошибка авториазации';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
