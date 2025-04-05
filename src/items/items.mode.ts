export interface Items {
  id: string;
  name: string;
  price: number;
  descripsion?: string;
  status: 'ON_SALE' | 'SOLD_OUT';
}
