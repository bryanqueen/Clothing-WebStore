import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

/* Creating a selector that will be used to select the directory.sections from the state. */
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
