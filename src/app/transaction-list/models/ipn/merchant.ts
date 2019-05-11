import {Operation, PaymentMethod, Status} from '../types.model';

export interface Merchant {
  transactionId: string;
  referenceNo: string;
  amount: number;
  currency: string;
  date: number;
  code: string;
  message: string;
  operation: Operation;
  type: string;
  status: Status;
  customData: string;
  chainId: string;
  paymentType: PaymentMethod;
  authTransactionId: string;
  token: string;
  convertedAmount: number;
  convertedCurrency: string;
  IPNUrl: string;
  ipnType: string;
}



