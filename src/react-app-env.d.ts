/// <reference types="react-scripts" />

export interface Categories {
  id: number;
  title: string;
  ownerId: number;
}

export interface Product {
  id: number;
  name: string;
  groupId: number;
}

export interface User {
  id: number;
  name: string;
}

export interface FullCategories extends Categories {
  user?: User;
  products: Product[];
}
