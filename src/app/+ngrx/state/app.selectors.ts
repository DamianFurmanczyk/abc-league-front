import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APP_FEATURE_KEY,
  appAdapter,
  AppPartialState,
  AppStateInterface
} from './app.reducer';

export const getAppState = createFeatureSelector<
  AppPartialState,
  AppStateInterface
>(APP_FEATURE_KEY);

const { selectAll } = appAdapter.getSelectors();
export const getCurrency = createSelector(
  getAppState,
  (state: AppStateInterface) => state.currency
);

export const getReviews = createSelector(
  getAppState,
  (state: AppStateInterface) => state.reviews
);

export const getReviewsLoading = createSelector(
  getAppState,
  (state: AppStateInterface) => state.reviewsLoading
);

export const getRegions = createSelector(
  getAppState,
  (state: AppStateInterface) => state.reviewsLoading
);

export const getRegionsLoading = createSelector(
  getAppState,
  (state: AppStateInterface) => state.reviewsLoading
);

export const getAccounts = createSelector(
  getAppState,
  (state: AppStateInterface) => state.accounts
);

export const getSelectedRegion = createSelector(
  getAppState,
  (state: AppStateInterface) => state.selectedRegion
);
