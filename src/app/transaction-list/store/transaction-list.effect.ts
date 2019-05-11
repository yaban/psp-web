import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TransactionListService} from '../transaction-list.service';
import * as fromAction from './transaction-list.actions';
import {switchMap, catchError, map, tap, mergeMap} from 'rxjs/operators';
import {EMPTY, from, of} from 'rxjs';
import {ListResponse, Search} from '../models';
import {ApiError} from '../../core/model/ApiError';

@Injectable()
export class TransactionListEffect {
    constructor(
        private actions: Actions,
        private transactionListService: TransactionListService

    ) {}

  @Effect()
  getTransactionList = this.actions.pipe(
    // filter out the actions, except '[Customers Page] Get'
    ofType<fromAction.TransactionList>(fromAction.TRANSACTION_LIST),
    map(action => action.payload),
    switchMap((payload: Search) =>
      // call the service
      this.transactionListService.getTransactionList(payload).pipe(
        // return a Success action when everything went OK
        map((reportResponse: ListResponse)  => new fromAction.TransactionListSuccess(reportResponse)),
        // return a Failed action when something went wrong
        catchError((err: ApiError) => of(new fromAction.TransactionListFail(err.message)))
      ),

    ),
  );

}
