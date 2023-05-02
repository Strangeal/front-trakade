import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProps } from '../../Types';
import { handleAuthResponse } from '../../helpers/handleAuthResponse';
import { createNewUser, singInUser } from '../api/endpoint';

const initialState = {
  status: '',
  errors: {},
};
export const registerUser = createAsyncThunk(
  'auth/register',
  async (user: UserProps, ThunkApi) => {
    try {
      const response = await createNewUser(user);
      await handleAuthResponse(response);
    } catch (err: any) {
      return ThunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user: UserProps, ThunkApi) => {
    try {
      const response = await singInUser(user);
      await handleAuthResponse(response);
    } catch (err: any) {
      return ThunkApi.rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(registerUser.fulfilled, (state) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';
        isFulfilled.errors = {};
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        const isRejected = state;
        isRejected.status = 'rejected';
        isRejected.errors = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(loginUser.fulfilled, (state) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';
        isFulfilled.errors = {};
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        const isRejected = state;
        isRejected.status = 'rejected';
        isRejected.errors = action.payload.error_description;
      });
  },
});

export default authSlice.reducer;
