import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionListState } from './transaction-list.reducers';

export interface TransactionListAppState {
  transactionListState: TransactionListState;
}

export const transactionListAppSelector = createFeatureSelector<TransactionListAppState>(
  'transactionList'
);


export const transactionListStateSelector = createSelector(
    transactionListAppSelector,
    (state: TransactionListAppState) => state.transactionListState
);

export const transactionListSelector = createSelector(
    transactionListStateSelector,
    (state: TransactionListState) => state.listResponse
);

export const transactionListErrorSelector = createSelector(
    transactionListStateSelector,
    (state: TransactionListState) => state.error
);
