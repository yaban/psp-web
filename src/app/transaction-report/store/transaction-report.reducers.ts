import * as fromAction from './transaction-report.actions';
import { Report } from '../models';

export interface TransactionReportState {
    report: Report[];
    error: string;
}

const initState: TransactionReportState = {
    report: [],
    error: ''
};

export function TransactionSearchReducer(state = initState, action: fromAction.TransactionReportActionsAll): TransactionReportState {
    switch (action.type) {

        case fromAction.TRANSACTION_REPORT_SUCCESS:
            return {
                report: action.payload,
                error: initState.error
            };

        case fromAction.TRANSACTION_REPORT_FAIL:
            return {
                report: initState.report,
                error: action.payload
            };

        default: {
            return state;
        }
    }

}
