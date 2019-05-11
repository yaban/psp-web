import {Action, createAction, props} from '@ngrx/store';
import { Search, Report} from '../models';

export const TRANSACTION_REPORT = 'TRANSACTION_REPORT';
export const TRANSACTION_REPORT_SUCCESS = 'TRANSACTION_REPORT_SUCCESS';
export const TRANSACTION_REPORT_FAIL = 'TRANSACTION_REPORT_FAIL';



export class TransactionReport implements Action {
    readonly type = TRANSACTION_REPORT;
    payload: Search;

    constructor(payload: Search) {
        this.payload = payload;
    }
}

export class TransactionReportSuccess implements Action {
    readonly type = TRANSACTION_REPORT_SUCCESS;
    payload: Report[];

    constructor(payload: Report[]) {
        this.payload = payload;
    }
}

export class TransactionReportFail implements Action {
    readonly type = TRANSACTION_REPORT_FAIL;
    payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}


export type TransactionReportActionsAll = TransactionReport | TransactionReportFail | TransactionReportSuccess;
