import { Review } from './../../models/reviews.interface';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { fromAppActions } from './app.actions';

export const APP_FEATURE_KEY = 'app';

export interface AppDetailsInterface {

};

export const appAdapter: EntityAdapter<
  AppDetailsInterface
> = createEntityAdapter<AppDetailsInterface>({
  // selectId: model => model.name
});

export interface AppStateInterface {
  currency: string | null,
  reviews: Review[] | null,
  reviewsLoading: boolean,
  currencyLoading: boolean,
  regions: any[],
  regionsLoading: boolean,
  selectedRegion: any,
  selectedRegionAccounts: any[]
  reviewsLoadingErr: boolean,
  currencyLoadingErr: boolean,
  regionsLoadingErr: boolean,
}

export const initialState: AppStateInterface = {
  currency: null,
  reviews: null,
  reviewsLoading: false,
  reviewsLoadingErr: false,
  currencyLoading: false,
  currencyLoadingErr: false,
  regions: [],
  regionsLoading: false,
  regionsLoadingErr: false,
  selectedRegion: null,
  selectedRegionAccounts: []
};

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppStateInterface;
}

export function reducer(
  state: AppStateInterface = initialState,
  action: fromAppActions.CollectiveType
) {
  switch (action.type) {


    case fromAppActions.Types.LoadCurrencies: {

      state = {
        ...state,
        currencyLoading: true,
        currencyLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.LoadCurrenciesSuccess: {

      state = {
        ...state,
        currencyLoading: false,
        currency: action.payload
      };

      break;
    }

    case fromAppActions.Types.LoadCurrenciesFail: {

      state = {
        ...state,
        currencyLoading: false,
        currencyLoadingErr: action.payload
      };

    }

    case fromAppActions.Types.LoadRegions: {

      state = {
        ...state,
        regionsLoading: true,
        regionsLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.LoadRegionsSuccess: {

      state = {
        ...state,
        regionsLoading: false,
        selectedRegion: action.payload
      };

      break;
    }

    case fromAppActions.Types.LoadRegionsFail: {

      state = {
        ...state,
        regionsLoading: false,
        regionsLoadingErr: action.payload
      };

    }

    case fromAppActions.Types.LoadReviews: {

      state = {
        ...state,
        reviewsLoading: true,
        reviewsLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.LoadReviewsSuccess: {
      state = {
        ...state,
        reviews: action.payload,
        reviewsLoading: false
      };

      break;
    }

    case fromAppActions.Types.LoadReviewsFail: {
      state = {
        ...state,
        reviews: action.payload,
        reviewsLoadingError: true,
        reviewsLoading: false
      };

      break;
    }

}
return state;
}

// export function reducer(
//   state = {ku:'ku'},
//   action
// ) {
//   switch (action.type) {

//     default: return state;
//   }
// }

// state = {
//   ...state,
//   favouritePlanets: appAdapter.addAll(
//     action.payload,
//     ...state.favs
//   )
// };
