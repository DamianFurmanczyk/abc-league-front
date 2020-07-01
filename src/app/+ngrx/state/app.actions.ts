import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export namespace fromAppActions {
  export enum Types {
    loadCurrencyBasedOnLocation = 'Load Currency Based On Location',
    loadCurrencyBasedOnLocationSuccess = 'Load Currency Based On Location Success',
    loadCurrencyBasedOnLocationFail = 'Load Currency Based On Location Fail',

    LoadCurrency =  'Load Currency',
    LoadCurrencySuccess =  'Load Currency Success',
    LoadCurrencyFail =  'Load Currency Fail',

    LoadReviews =  'Load Reviews',
    LoadReviewsSuccess =  'Load Reviews Success',
    LoadReviewsFail =  'Load Reviews Fail',

    AddReview =  'Add Review',
    AddReviewSuccess =  'Add Review Success',
    AddReviewFail =  'Add Review Fail',

    LoadRegions =  'Load Regions',
    LoadRegionsSuccess =  'Load Regions Success',
    LoadRegionsFail =  'Load Regions Fail',

    LoadAccounts =  'Load Accounts',
    LoadAccountsSuccess =  'Load Accounts Success',
    LoadAccountsFail =  'Load Accounts Fail',

    SelectRegion =  'Select Regions'
  }

  export class SelectRegion implements Action {
    readonly type = Types.SelectRegion;

    constructor(public payload) {}
  }
  export class LoadAccounts implements Action {
    readonly type = Types.LoadAccounts;

    constructor() {}
  }
  export class LoadAccountsSuccess implements Action {
    readonly type = Types.LoadAccountsSuccess;

    constructor(public payload) {}
  }
  export class LoadAccountsFail implements Action {
    readonly type = Types.LoadAccountsFail;

    constructor(public payload) {}
  }
  export class LoadCurrency implements Action {
    readonly type = Types.LoadCurrency;

    constructor(public payload: string) {}
  }
  export class LoadCurrencySuccess implements Action {
    readonly type = Types.LoadCurrencySuccess;

    constructor(public payload) {}
  }
  export class LoadCurrencyFail implements Action {
    readonly type = Types.LoadCurrencyFail;

    constructor(public payload) {}
  }
  export class LoadRegions implements Action {
    readonly type = Types.LoadRegions;

    constructor() {}
  }
  export class LoadRegionsSuccess implements Action {
    readonly type = Types.LoadRegionsSuccess;

    constructor(public payload) {}
  }
  export class LoadRegionsFail implements Action {
    readonly type = Types.LoadRegionsFail;

    constructor(public payload) {}
  }

  export class LoadReviews implements Action {
    readonly type = Types.LoadReviews;

    constructor() {}
  }
  export class LoadReviewsSuccess implements Action {
    readonly type = Types.LoadReviewsSuccess;

    constructor(public payload) {}
  }
  export class LoadReviewsFail implements Action {
    readonly type = Types.LoadReviewsFail;

    constructor(public payload) {}
  }
  export class loadCurrencyBasedOnLocation implements Action {
    readonly type = Types.loadCurrencyBasedOnLocation;

    constructor() {}
  }

  export class loadCurrencyBasedOnLocationSuccess implements Action {
    readonly type = Types.loadCurrencyBasedOnLocationSuccess;

    constructor(public payload) {}
  }

  export class loadCurrencyBasedOnLocationFail implements Action {
    readonly type = Types.loadCurrencyBasedOnLocationFail;

    constructor(public payload) {}
  }

  export type CollectiveType =
    | loadCurrencyBasedOnLocation
    | loadCurrencyBasedOnLocationSuccess
    | LoadReviews
    | LoadReviewsSuccess
    | LoadReviewsFail
    | loadCurrencyBasedOnLocationFail
    | LoadRegions
    | LoadRegionsSuccess
    | LoadRegionsFail
    | LoadAccounts
    | LoadAccountsSuccess
    | LoadAccountsFail
    | LoadCurrency
    | LoadCurrencySuccess
    | LoadCurrencyFail
    | SelectRegion
}
