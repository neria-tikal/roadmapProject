import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';


const routes: Routes = [
  { 
    path: '',
    component: ItemsListComponent,
    children: [
      {
        path: '/:id',
        component: ItemViewComponent,
      },
      {
        path: '/:id/add',
        component: ItemFormComponent
      },
      {
        path: '/:id/edit',
        component: ItemFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
