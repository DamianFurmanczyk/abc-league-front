import { Account } from './../../models/account.interface';
import { currencyData } from './../../models/currencyData.interface';
import { Review } from './../../models/reviews.interface';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { fromAppActions } from './app.actions';
export const APP_FEATURE_KEY = 'app';

function getAccountsWithAppropCurrency(currency: currencyData, accArr: Account[]) {
  let accountsAccCopy = JSON.parse(JSON.stringify(accArr));

  console.log(accArr)

  accountsAccCopy = accountsAccCopy.map(el => {
    // console.log(+el.price_usd + ' ' + currency.exchangeRateToDollar, ' ' , +el.price_usd * currency.exchangeRateToDollar)
    // console.log(String((+el.price_usd.split(' ')[0] * currency.exchangeRateToDollar).toFixed(2)))
    // console.log(currency.exchangeRateToDollar);
    const newPrice =+el.price_usd * currency.exchangeRateToDollar
    el.priceAfterConversion = (newPrice).toFixed(2)
    // console.log(el);
    return el;
  });
  
  return accountsAccCopy;
}

export interface AppDetailsInterface {

};

export const appAdapter: EntityAdapter<
  AppDetailsInterface
> = createEntityAdapter<AppDetailsInterface>({
  // selectId: model => model.name
});

export interface AppStateInterface {
  currency: currencyData | null,
  reviews: Review[] | null,
  reviewsLoading: boolean,
  currencyLoading: boolean,
  regions: any[] | null,
  regionsLoading: boolean,
  selectedRegion: any,
  reviewsLoadingErr: boolean,
  currencyLoadingErr: boolean,
  regionsLoadingErr: boolean,
  accounts: {acc: Account[], count: number[]},
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
  regions: null,
  regionsLoading: false,
  regionsLoadingErr: false,
  selectedRegion: {id: '1', name: 'EUNE'},
  accounts: {acc: [], count: []},
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

    case fromAppActions.Types.loadCurrencyBasedOnLocation: {

      state = {
        ...state,
        currencyLoading: true,
        currencyLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.loadCurrencyBasedOnLocationSuccess: {

      state = {
        ...state,
        currencyLoading: false,
        currency: action.payload,
        accounts: { acc: state.accounts.acc.length == 0 ? [] : getAccountsWithAppropCurrency(action.payload, state.accounts.acc), count: state.accounts.count }
      };

      break;
    }

    case fromAppActions.Types.loadCurrencyBasedOnLocationFail: {

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

    
    case fromAppActions.Types.LoadCurrency: {

      state = {
        ...state,
        currencyLoading: true,
        currencyLoadingErr: false
      };

      break;
    }

    case fromAppActions.Types.LoadCurrencySuccess: {
console.log(action.payload);
console.log(state.accounts);
      state = {
        ...state,
        currencyLoading: false,
        currency: action.payload,
        accounts: { acc: state.accounts.acc.length == 0 ? [] : getAccountsWithAppropCurrency(action.payload, state.accounts.acc), count: state.accounts.count }
      };

      break;
    }

    case fromAppActions.Types.LoadCurrencyFail: {
      state = {
        ...state,
        currencyLoadingErr: true,
        currencyLoading: false
      };

      break;
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
      console.log(action.payload.map)
      let reviewsCopy = JSON.parse(JSON.stringify(action.payload));
      state = {
        ...state,
        reviews: reviewsCopy.map(el => {
          if(!el.updated_at) return el;
          return  {
          ...el, updated_at: el.updated_at.split('T')[0]
        }}
        ),
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
      const accountsWithAppropCurrency = getAccountsWithAppropCurrency(state.currency || {name: 'USD', exchangeRateToDollar: 1}, 
      action.payload.acc);

      state = {
        ...state,
        accounts: {...action.payload, acc: accountsWithAppropCurrency},
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
