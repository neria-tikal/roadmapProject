import { createReducer, on } from '@ngrx/store';
import { Add, Edit, Remove } from '../actions/items.actions';
import { Item } from '../pages/items/items.interfaces';

const initialState: Array<Item> = [
  { id: 1, categoryId: 2, title: 'test title', body: 'test body', done: false },
  { id: 2, categoryId: 2, title: 'test title2', body: 'test body', done: true },
  { id: 3, categoryId: 2, title: 'test title3', body: 'test body', done: false }
];

const _itemsReducer = createReducer<Item[]>(initialState,
  on(Add, (state, action) => [...state, action.item]),
  on(Edit, (state, action) => [...state.map(item => item.id === action.item.id ? action.item : item)]),
  on(Remove, (state, action) => state.filter(item => item.id != action.id)),  
);

export function itemsReducer(state: Item[] | undefined, action: any) {
  return _itemsReducer(state, action);
}
