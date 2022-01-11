import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CATEGORIES } from '../items.consts';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from '../items.interfaces';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getItemById } from 'src/app/selectors/items.selector';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  
  public formType = 'add';
  public itemId = this.route.snapshot.params.id;

  public itemForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    categoryId: new FormControl(),
  });


  public categories = CATEGORIES;


  constructor(
    private route: ActivatedRoute,
    private store: Store<{ item: Item, action: any }>
    ) {

    }

  ngOnInit(): void {

    console.log('this.itemId', this.itemId)
    if (this.itemId) {
      this.formType = 'edit';


      // this.itemForm.patchValue(this.item);
    }

  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.itemForm.value);
}

}
