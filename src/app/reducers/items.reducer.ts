import { createReducer, on } from '@ngrx/store';
import { Add, Remove } from '../actions/items.actions';
import { Item } from '../pages/items/items.interfaces';

const initialState: Array<Item> = [
  { id: 0, categoryId: 2, title: 'test title', body: 'test body' },
  { id: 2, categoryId: 2, title: 'test title2', body: 'test body' },
  { id: 3, categoryId: 2, title: 'test title3', body: 'test body' }
];

const _itemsReducer = createReducer(initialState,
  on(Add, (state, action) => [...state, action.item]),
  on(Remove, (state, action) => state.filter(item => item.id != action.id)),
  // on(GetItemById, (state, action) => state.filter(item => item.id == action.id)),
  
);

export function itemsReducer(state: Array<Item> | undefined, action: any) {
  return _itemsReducer(state, action);
}

