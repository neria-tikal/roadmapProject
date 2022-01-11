import { createAction, createSelector, props } from '@ngrx/store';
import { Item } from '../pages/items/items.interfaces';

export const Add = createAction('[Item Component] Add', props<{item: Item}>());
export const Remove = createAction('[Item Component] Remove', props<{id: number}>());



