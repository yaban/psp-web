import {Merchant} from './merchant';

export interface Ipn {
  sent: boolean;
  merchant: Merchant;
}
