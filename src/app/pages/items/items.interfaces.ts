export interface Item {
  id: number;
  title: string;
  body: string;
  categoryId: number;
  done: boolean;
}

export interface Category {
  id: number;
  name: string
}