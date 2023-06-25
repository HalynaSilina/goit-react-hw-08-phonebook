import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogIn,
  userLogOut,
  fetchCurrentUser,
} from 'redux/auth/authThunks';

const userInitialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshed: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshed = false;
      }).addCase(fetchCurrentUser.pending, state => {
        state.isRefreshed = true;
      }).addCase(fetchCurrentUser.rejected, state=> {
        state.isRefreshed = true;
      });
  },
});

export const authReducer = authSlice.reducer;
