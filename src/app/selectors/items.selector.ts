import { createSelector } from '@ngrx/store';
import { AppState } from "../app.interfaces";

export const getItems = (state: AppState) => state.items;

export const getItemById = (id: number) => createSelector(
  getItems, 
  (items) => {
    return items.find(item => item.id == id);
  }
);

export const getDoneFiltered = (done: boolean) => createSelector(
  getItems, 
  (items) => {
    return items.filter(item => item.done == done);
  }
);