import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export namespace fromAppActions {
  export enum Types {
    LoadCurrencies = 'Load Currencies',
    LoadCurrenciesSuccess = 'Load Currencies Success',
    LoadCurrenciesFail = '[Planets List] Load Currencies Fail',

    LoadAppropCurrency = 'Load Currencies',
    LoadAppropCurrencySuccess = 'Load Currencies Success',
    LoadAppropCurrencyFail = '[Planets List] Load Currencies Fail',

    LoadReviews =  'Load Reviews',
    LoadReviewsSuccess =  'Load Reviews Success',
    LoadReviewsFail =  'Load Reviews Fail',

    AddReview =  'Add Review',
    AddReviewSuccess =  'Add Review Success',
    AddReviewFail =  'Add Review Fail'
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
  export class LoadAppropCurrency implements Action {
    readonly type = Types.LoadAppropCurrency;

    constructor() {}
  }

  export class LoadAppropCurrencySuccess implements Action {
    readonly type = Types.LoadAppropCurrencySuccess;

    constructor(public payload) {}
  }

  export class LoadAppropCurrencyFail implements Action {
    readonly type = Types.LoadAppropCurrencyFail;

    constructor(public payload) {}
  }

  export class LoadCurrencies implements Action {
    readonly type = Types.LoadCurrencies;

    constructor() {}
  }

  export class LoadCurrenciesSuccess implements Action {
    readonly type = Types.LoadCurrenciesSuccess;

    constructor(public payload) {}
  }

  export class LoadCurrenciesFail implements Action {
    readonly type = Types.LoadCurrenciesFail;

    constructor(public payload) {}
  }

  export type CollectiveType =
    | LoadCurrencies
    | LoadCurrenciesSuccess
    | LoadCurrenciesFail
    | LoadAppropCurrency
    | LoadAppropCurrencySuccess
    | LoadReviews
    | LoadReviewsSuccess
    | LoadReviewsFail
    | LoadAppropCurrencyFail
}
