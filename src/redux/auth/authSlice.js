import { createSlice } from '@reduxjs/toolkit';
import { userRegistration, userLogIn, userLogOut } from 'redux/auth/authThunks';

const userInitialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder => {
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(userLogIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(userLogOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
  },
});

export const authReducer = authSlice.reducer;
