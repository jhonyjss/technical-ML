export interface IPricesList {
  id: string;
  type: string;
  amount: number;
  regular_amount?: number;
  currency_id: string;
  last_updated: Date;
  conditions: {
    context_restrictions: [];
    start_time: Date;
    end_time: Date;
    eligible: true;
  };
  exchange_rate_context: string;
  metadata: any;
}
