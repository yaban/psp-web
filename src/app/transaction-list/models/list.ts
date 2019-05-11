import {CustomerInfo, Fx, Acquirer, Transaction, Merchant, Ipn} from './index';


export interface List {
  customerInfo: CustomerInfo;
  updated_at: string;
  created_at: string;
  fx: Fx;
  acquirer: Acquirer;
  transaction: Transaction;
  refundable: boolean;
  merchant: Merchant;
  ipn: Ipn;
}
