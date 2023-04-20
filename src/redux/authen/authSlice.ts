import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "../../Types";
import { createNewUser, singInUser } from "../api/endpoint";
import { handleAuthResponse } from "../../helpers/handleAuthResponse";

const initialState = {
  status: "",
};
export const registerUser = createAsyncThunk(
  "auth/register",
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
  "auth/login",
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
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        const isPending = state;
        isPending.status = "pending";
      })
      .addCase(registerUser.fulfilled, (state) => {
        const isFulfilled = state;
        isFulfilled.status = "fulfilled";
      })
      .addCase(registerUser.rejected, (state) => {
        const isRejected = state;
        isRejected.status = "rejected";
      })
      .addCase(loginUser.pending, (state) => {
        const isPending = state;
        isPending.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state) => {
        const isFulfilled = state;
        isFulfilled.status = "fulfilled";
      })
      .addCase(loginUser.rejected, (state) => {
        const isRejected = state;
        isRejected.status = "rejected";
      });
  },
});

export default authSlice.reducer;
