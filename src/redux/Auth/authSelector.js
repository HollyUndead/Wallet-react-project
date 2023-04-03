export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.username;
export const selectUserData = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectIsModalOpen = state => state.auth.isModalOpen;
