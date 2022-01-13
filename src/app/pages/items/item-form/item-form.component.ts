import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../items.consts';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { getItemById } from 'src/app/selectors/items.selector';
import { AppState } from 'src/app/app.interfaces';
import { Add, Edit } from 'src/app/actions/items.actions';

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
    categoryId: new FormControl(null, Validators.required),
    title: new FormControl({value: '', disabled: true}, [Validators.required, Validators.minLength(4)]),
    body: new FormControl({value: '', disabled: true}),
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
            this.itemForm.patchValue(item);
            if (!!item.categoryId) {
              this.itemForm.get('title')?.enable();
              this.itemForm.get('body')?.enable();
            }
          }
        });
    }

    this.itemForm.controls['categoryId'].valueChanges.subscribe(change => {
      const ctrlTitle = this.itemForm.get('title');
      const ctrlBody = this.itemForm.get('body');
      if (!!change) {
        ctrlTitle?.enable();
        ctrlBody?.enable();
      } else {
        ctrlTitle?.disable();
        ctrlBody?.disable();
      }
    });
  }

  onSubmit() {
    const data = this.itemForm.value;    
    const act = data.id ? Edit({item: data}) : Add({item: data});
    this.store.dispatch(act);
    this.router.navigate(['items']);
  }
}
