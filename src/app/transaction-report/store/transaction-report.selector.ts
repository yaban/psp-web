import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionReportState } from './transaction-report.reducers';

export interface TransactionReportAppState {
  transactionReportState: TransactionReportState;
}

export const transactionReportAppSelector = createFeatureSelector<TransactionReportAppState>(
  'transactionReport'
);


export const transactionReportStateSelector = createSelector(
    transactionReportAppSelector,
    (state: TransactionReportAppState) => state.transactionReportState
);

export const transactionReportSelector = createSelector(
    transactionReportStateSelector,
    (state: TransactionReportState) => state.report
);

export const transactionReportErrorSelector = createSelector(
    transactionReportStateSelector,
    (state: TransactionReportState) => state.error
);
