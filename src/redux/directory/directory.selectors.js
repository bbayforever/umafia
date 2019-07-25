import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

// eslint-disable-next-line import/prefer-default-export
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections,
);
