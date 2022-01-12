import { Component, OnInit } from '@angular/core';
import { Item } from '../items.interfaces';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Add, Remove } from '../../../actions/items.actions';
import { ItemsService } from 'src/app/services/items.service';
import { getItems } from 'src/app/selectors/items.selector';
import { AppState } from 'src/app/app.interfaces';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public busy = false;
  public items: Item[] = [];

  constructor(private store: Store<AppState>) {
    store.pipe(select(getItems))
    .subscribe(items => {
      this.items = items;
    });
    console.log('this.items', this.items);
  }

  removeItem(itemId: number) {
    this.store.dispatch(Remove({id: itemId}));
  }

  ngOnInit(): void {
  }

}
