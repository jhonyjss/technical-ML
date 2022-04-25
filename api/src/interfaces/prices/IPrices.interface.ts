import { IPricesList } from './IPricesList.interface';

export interface IPrices {
  id: string;
  prices: IPricesList;
  presentation: {
    display_currency: string;
  };
}
