import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { fromAppActions } from './app.actions';

export interface AppDetailsInterface {

};

export interface review {
  author: string,
  created_at: string,
  id: number,
  stars: number,
  tekst: string,
  updated_at: string
}

export interface AppStateInterface {
  currency: string | null,
  reviews: review[] | null
}

export const APP_FEATURE_KEY = 'app';

export const appAdapter: EntityAdapter<
  AppDetailsInterface
> = createEntityAdapter<AppDetailsInterface>({
  // selectId: model => model.name
});

export const initialState: AppStateInterface = {
  currency: 'asd',
  reviews: null,
  // planets: planetsAdapter.getInitialState(),
  // favouritePlanets: planetsAdapter.getInitialState(),
  // count: 0,
  // page: 1,
  // error: null,
  // loading: false,
  // detailsLoading: false,
  // planetDetails: null,
  // detailsError: null
};

// function extractId(planetInfo: PlanetDetailsInterface) {
//   let url = planetInfo.url;
//   if (url) {
//     if (url[url.length - 1] === '/') url = url.substring(0, url.length - 1);
//     url = url.slice(url.lastIndexOf('/') + 1);
//     return { ...planetInfo, url };
//   } else return planetInfo;
// }

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: AppStateInterface;
}

export function reducer(
  state: AppStateInterface = initialState,
  action: fromAppActions.CollectiveType
) {
  switch (action.type) {

    case fromAppActions.Types.LoadCurrenciesSuccess: {
      if (!action.payload) break;

      state = {
        ...state,
        currency: action.payload
      };

      break;
    }

    case fromAppActions.Types.LoadReviewsSuccess: {
      state = {
        ...state,
        reviews: action.payload
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
