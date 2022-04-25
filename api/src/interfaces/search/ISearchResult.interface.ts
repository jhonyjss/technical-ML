import { IPrices } from '../prices/IPrices.interface';
import { ISeller } from '../seller/ISeller.interface';

export interface ISearchResults {
  id: string;
  site_id: string;
  title: string;
  seller: ISeller;
  price: number;
  prices: IPrices;
  sale_price?: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  order_backend: number;
}

export interface IResults {
  results?: ISearchResults;
}
