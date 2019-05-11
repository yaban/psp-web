export interface Merchant {
  id: number;
  name: string;
  allowPartialRefund: boolean;
  allowPartialCapture: boolean;
  message: string;
  customData: string;
  type: string;
  transactionId: string;
}
