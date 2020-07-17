import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APP_FEATURE_KEY,
  reviewsAdapter,
  AppPartialState,
  AppStateInterface
} from './app.reducer';

export const getAppState = createFeatureSelector<
  AppPartialState,
  AppStateInterface
>(APP_FEATURE_KEY);

const { selectAll } = reviewsAdapter.getSelectors();

export const getCurrency = createSelector(
  getAppState,
  (state: AppStateInterface) => state.currency
);

export const getCoupons = createSelector(
  getAppState,
  (state: AppStateInterface) => state.coupons
);

export const getReviewsRatingAvg = createSelector(
  getAppState,
  (state: AppStateInterface) => state.reviewsAvgRating
);

export const getReviews = createSelector(
  getAppState,
  (state: AppStateInterface) => selectAll(state.reviews)
);

export const getReviewsLoading = createSelector(
  getAppState,
  (state: AppStateInterface) => state.reviewsLoading
);

export const getRegions = createSelector(
  getAppState,
  (state: AppStateInterface) => state.regions
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
