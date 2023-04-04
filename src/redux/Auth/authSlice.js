import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, signOut, fetchCurrentUser } from '../operations';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isModalOpen: false,
};


export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    openModalLogOut(state) {
      state.isModalOpen = true;
    },
    closeModalLogOut(state) {
      state.isModalOpen = false;
    },
    //  toggleModal(state) {
    //   state.isModalOpen = !state.isModalOpen;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state, _) => {
        state.isLoggedIn = false;
        state.user = { email: null, password: null };
        state.token = null;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        // state.error = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export const {
  openModalLogOut,
  closeModalLogOut,
  // toggleModal
} = authSlice.actions;

