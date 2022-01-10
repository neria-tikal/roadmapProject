import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { UserDetailsDialogComponent } from 'src/app/components/user-details-dialog/user-details-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';




@NgModule({
  declarations: [
    ItemsListComponent,
    ItemViewComponent,
    ItemFormComponent,
    UserDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
  ],
  providers: [],
})
export class ItemsModule { }