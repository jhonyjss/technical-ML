import { IMetrics } from './IMetrics.interface';
import { ITransaction } from './ITransaction.interface';

export interface ISellerReputation {
  power_seller_status: string;
  level_id: string;
  metrics: IMetrics;
  transactions: ITransaction;
}
