export interface Filters {
  [key: string]: {
    brand?: string;
    model?: string;
    price?: number;
    miles?: number;
  };
}
