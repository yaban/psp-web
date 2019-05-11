import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TransactionReportService} from '../transaction-report.service';
import * as fromAction from './transaction-report.actions';
import {switchMap, catchError, map, tap, mergeMap} from 'rxjs/operators';
import {EMPTY, from, of} from 'rxjs';
import {ReportResponse, Search} from '../models';
import {ApiError} from '../../core/model/ApiError';

@Injectable()
export class TransactionReportEffect {
    constructor(
        private actions: Actions,
        private transactionReportService: TransactionReportService

    ) {
    }


  @Effect()
  getTransactionReport = this.actions.pipe(
    // filter out the actions, except '[Customers Page] Get'
    ofType<fromAction.TransactionReport>(fromAction.TRANSACTION_REPORT),
    map(action => action.payload),
    switchMap((payload: Search) =>
      // call the service
      this.transactionReportService.getTransactionReport(payload).pipe(
        // return a Success action when everything went OK
        map((reportResponse: ReportResponse)  => new fromAction.TransactionReportSuccess(reportResponse.response)),
        // return a Failed action when something went wrong
        catchError((err: ApiError) => of(new fromAction.TransactionReportFail(err.message)))
      ),

    ),
  );
/*
  @Effect()

  loadMovies$ = this.actions
    .pipe(
      ofType(fromAction.TRANSACTION_REPORT)
        .pipe(

        )
      switchMap((payload) => this.transactionReportService.getTransactionReport(payload)
        .pipe(
          map((reportResponse: ReportResponse)  => new fromAction.TransactionReportSuccess( reportResponse.response)),
          catchError(() => EMPTY)
        ))

    );

*/
/*
   @Effect()
    customerSearchEffect = this.actions
        .ofType<fromAction.TransactionReport>(fromAction.TRANSACTION_REPORT)
        .pipe(
            map(action => action.payload),
            switchMap((payload: Search) =>
                this.transactionReportService.getTransactionReport(payload).pipe(
                    map((reportResponse: ReportResponse) => new fromAction.TransactionReportSuccess(reportResponse.response)),
                    catchError(err => of(new fromAction.TransactionReportFail(err)))
                )
            )
        );
*/


}
