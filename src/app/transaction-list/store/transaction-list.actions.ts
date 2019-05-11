import {Action, createAction, props} from '@ngrx/store';
import {Search, List, ListResponse} from '../models';

export const TRANSACTION_LIST = 'TRANSACTION_LIST';
export const TRANSACTION_LIST_SUCCESS = 'TRANSACTION_LIST_SUCCESS';
export const TRANSACTION_LIST_FAIL = 'TRANSACTION_LIST_FAIL';



export class TransactionList implements Action {
    readonly type = TRANSACTION_LIST;
    payload: Search;

    constructor(payload: Search) {
        this.payload = payload;
    }
}

export class TransactionListSuccess implements Action {
    readonly type = TRANSACTION_LIST_SUCCESS;
    payload: ListResponse;

    constructor(payload: ListResponse) {
        this.payload = payload;
    }
}

export class TransactionListFail implements Action {
    readonly type = TRANSACTION_LIST_FAIL;
    payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}


export type TransactionListActionsAll = TransactionList | TransactionListFail | TransactionListSuccess;
