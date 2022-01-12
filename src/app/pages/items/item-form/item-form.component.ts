import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../items.consts';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from '../items.interfaces';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getItemById } from 'src/app/selectors/items.selector';
import { AppState } from 'src/app/app.interfaces';
import { ItemViewComponent } from '../item-view/item-view.component';
import { Add, Edit } from 'src/app/actions/items.actions';
// import { getItemById } from 'src/app/selectors/items.selector';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  
  public formType = 'add';
  public itemId?: number;
  public categories = CATEGORIES;

  public itemForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    body: new FormControl(''),
    categoryId: new FormControl(null, Validators.required),
    done: new FormControl(false),
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    if (this.itemId = this.route.snapshot.params.id) {
      this.formType = 'edit';
      this.store.pipe(select(getItemById(this.itemId)))
        .subscribe(item => {
          if (!item) {
              this.router.navigate(['items', 'add']);
          } else {
            console.log('item', item);
            this.itemForm.patchValue(item);
          }
        });
    }
  }

  onSubmit() {
    const data = this.itemForm.value;    
    const act = data.id ? Edit({item: data}) : Add({item: data});
    this.store.dispatch(act);
    this.router.navigate(['items']);
  }
}
