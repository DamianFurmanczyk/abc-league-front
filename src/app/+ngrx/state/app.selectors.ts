import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APP_FEATURE_KEY,
  appAdapter,
  AppPartialState,
  AppStateInterface
} from './app.reducer';

export const getPlanetsState = createFeatureSelector<
  AppPartialState,
  AppStateInterface
>(APP_FEATURE_KEY);

const { selectAll } = appAdapter.getSelectors();

export const getFavouritePlanetsState = createSelector(
  getPlanetsState,
  (state: AppStateInterface) => state
);

);
