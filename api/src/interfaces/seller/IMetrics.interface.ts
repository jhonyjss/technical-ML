import { IMetricsField } from './IMetricsField.interface';
import { ISales } from './ISales.interface';

export interface IMetrics {
  cancellations: IMetricsField;
  claims: IMetricsField;
  delayed_handling_time: IMetricsField;
  sales: ISales;
}
