import { ITransactionRating } from './ITransactionRating.interface';

export interface ITransaction {
  canceled: number;
  period: string;
  total: number;
  ratings: ITransactionRating;
  completed: number;
}
