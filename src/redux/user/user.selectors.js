import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

/* A selector that is used to get the current user from the state. */
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
