import { NgModule } from '@angular/core';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemViewComponent,
    ItemFormComponent,
  ],
  imports: [
    ItemsRoutingModule
  ],
  providers: [],
})
export class ItemsModule { }