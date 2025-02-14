import { ReporttableComponent } from './reporttable/reporttable.component';
import { AddComponent } from './add/add.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'add',
    component:AddComponent,
  },
  {
    path:'reporttable',
    component:ReporttableComponent
  },
  { path: 'member', loadChildren: () => import('./module/member/member.module').then(m => m.MemberModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
