import {Status, PaymentMethod, Operation} from './index';

export interface Search {
  fromDate: string;
  toDate: string;
  merchant: string;
  status: Status;
  operation: Operation;
  merchantId: number;
  acquirerId: number;
  paymentMethod: PaymentMethod;
  errorCode: string;
  filterField: string;
  filterValue: string;
  page: number;
}


