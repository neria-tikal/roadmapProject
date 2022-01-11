import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

// import { AppModule } from 'src/app/app.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ItemsListComponent,
    ItemViewComponent,
    ItemFormComponent,
  ],
  imports: [
    // AppModule,
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