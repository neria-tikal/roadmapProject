import { Component, OnInit } from '@angular/core';
import { Item } from '../items.interfaces';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Add, Remove } from '../../../actions/items.actions';
import { ItemsService } from 'src/app/services/items.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public busy = false;
  public items: Item[] = [];

  items$ : Observable<Item[]>;

  constructor(private store: Store<{ items: Item[], action: any }>) {
    this.items$ = store.pipe(select('items'));
    console.log('this.items$', this.items$);
  }

  addItem() {
    const data: Item = {
      id: 100,
      categoryId: 200,
      title: 'added title',
      body: 'added body'
    }
    console.log('addItem', data);
    this.store.dispatch(Add({item: data}));
    console.log('this.items$', this.items$);
  }

  removeItem(itemId: number) {
    this.store.dispatch(Remove({id: itemId}));
    console.log('this.items$', this.items$);
  }

  ngOnInit(): void {
  }

}
