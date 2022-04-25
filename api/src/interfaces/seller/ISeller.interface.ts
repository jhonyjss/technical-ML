import { ISellerReputation } from './ISellerReputation.interface';

export interface ISeller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  seller_reputation: ISellerReputation;
}
