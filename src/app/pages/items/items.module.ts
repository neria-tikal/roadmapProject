import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ItemsListComponent,
    ItemViewComponent,
    ItemFormComponent,
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule
  ],
  providers: [],
})
export class ItemsModule { }