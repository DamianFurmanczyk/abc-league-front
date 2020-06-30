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
  currency: { name: string, exchangeRateToDollar: number } | null,
  reviews: Review[] | null,
  reviewsLoading: boolean,
  currencyLoading: boolean,
  regions: any[],
  regionsLoading: boolean,
  selectedRegion: any,
  reviewsLoadingErr: boolean,
  currencyLoadingErr: boolean,
  regionsLoadingErr: boolean,
  accounts: any[] | null,
  accountsLoading: boolean,
  accountsLoadingErr: boolean
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
  selectedRegion: {id: '1', name: 'EUNE'},
  accounts: [],
  accountsLoading: false,
  accountsLoadingErr: false
};

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppStateInterface;
}

export function reducer(
  state: AppStateInterface = initialState,
  action: fromAppActions.CollectiveType
) {
  switch (action.type) {



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
        regions: action.payload
      };

      break;
    }

    case fromAppActions.Types.SelectRegion: {
      
      state = {
        ...state,
        selectedRegion: action.payload
      };

      break;
    }

    case fromAppActions.Types.LoadAppropCurrency: {

      state = {
        ...state,
        regionsLoading: true,
        regionsLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.LoadAppropCurrencySuccess: {
      
      state = {
        ...state,
        currencyLoading: false,
        currency: action.payload
      };

      break;
    }

    case fromAppActions.Types.LoadAppropCurrencyFail: {

      state = {
        ...state,
        currencyLoading: false,
        currencyLoadingErr: action.payload
      };

      break;
    }

    case fromAppActions.Types.SelectRegion: {
      
      state = {
        ...state,
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
        reviewsLoadingErr: true,
        reviewsLoading: false
      };

      break;
    }
    case fromAppActions.Types.LoadAccounts: {

      state = {
        ...state,
        accountsLoading: true,
        accountsLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.LoadAccountsSuccess: {
      state = {
        ...state,
        accounts: action.payload,
        accountsLoading: false
      };

      break;
    }

    case fromAppActions.Types.LoadAccountsFail: {
      state = {
        ...state,
        accountsLoadingErr: true,
        accountsLoading: false
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
