import { Injectable } from '@angular/core';
import { Item } from '../pages/items/items.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = [];

  constructor() { }

  // getItems() {
  //   return this.items;
  // }

  // addItem(item: Item) {
  //   this.items.push(item);
  // }

  // getItemById(itemId: number): Item | null {
  //   return this.items.filter(i => {
  //     i.id = itemId;
  //   })[0];
  // }
}
