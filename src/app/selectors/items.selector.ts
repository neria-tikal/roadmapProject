import { Item } from "../pages/items/items.interfaces";
import { createSelector } from '@ngrx/store';

export const getItems = (state: Item[]) => state;

export const getItemById = (id: number) => createSelector(
  getItems, 
  (items) => {
    const itemArr = items.filter(item => item.id == id);
    if (!!itemArr) return itemArr[0];
    else return null;
  }
);