import * as fromAction from './transaction-list.actions';
import {ListResponse} from '../models';

export interface TransactionListState {
    listResponse: ListResponse;
    error: string;
}

const initState: TransactionListState = {
    listResponse: null,
    error: null
};

export function TransactionListReducer(state = initState, action: fromAction.TransactionListActionsAll): TransactionListState {
    switch (action.type) {

        case fromAction.TRANSACTION_LIST_SUCCESS:
            return {
                listResponse: action.payload,
                error: initState.error
            };

        case fromAction.TRANSACTION_LIST_FAIL:
            return {
                listResponse: initState.listResponse,
                error: action.payload
            };

        default: {
            return state;
        }
    }

}
