import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// eslint-disable-next-line import/prefer-default-export
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [],
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null),
);
