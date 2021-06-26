import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../../api';

interface AuthState {
  result: {
    email: string;
    name: string;
  };
  token: string;
}

const initialState: AuthState = {
  result: {
    email: '',
    name: '',
  },
  token: '',
};

export const signIn = createAsyncThunk('auth/signIn', async (req: any) => {
  const { data } = await api.signIn(req.formData);
  return data;
});

export const signUp = createAsyncThunk('auth/signUp', async (req: any) => {
  const { data } = await api.signUp(req.formData);
  return data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<any>) => {
      localStorage.setItem('profile', JSON.stringify(action.payload?.data));
      state = { ...action.payload?.data };
    },
    logOut: (state) => {
      localStorage.clear();
      state.result = { ...initialState.result };
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state: AuthState, action) => {
      if (action.payload) {
        state.result = { ...action.payload?.result };
        state.token = action.payload.token;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      }
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      if (action.payload) {
        state = { ...action.payload };
        localStorage.setItem('profile', JSON.stringify(action.payload));
      }
    });
  },
});

export const { auth, logOut } = authSlice.actions;

export default authSlice.reducer;
