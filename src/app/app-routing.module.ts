import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './pages/dahsboard/dahsboard.component';

const routes: Routes = [
  { path: '', component: DahsboardComponent },
  { 
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
