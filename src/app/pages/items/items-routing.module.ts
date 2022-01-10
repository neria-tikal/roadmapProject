import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';


const routes: Routes = [
  { 
    path: '',
    component: ItemsListComponent,
  },
  {
    path: 'add',
    component: ItemFormComponent
  },
  {
    path: ':id/edit',
    component: ItemFormComponent
  },
  {
    path: ':id',
    component: ItemViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
