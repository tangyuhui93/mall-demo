export interface Product {
  id: string;
  name: string;
  description: string;
  points: number;
  cashAmount?: number;
  image: string;
  tag?: string;
  tagColor?: string;
  category: string;
  discount?: string;
  originalPoints?: number;
  savings?: number;
}

export interface TabItem {
  id: string;
  label: string;
}

export interface PriceFilter {
  id: string;
  label: string;
}
