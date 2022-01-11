export interface Item {
  id: number;
  title: string;
  body: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string
}