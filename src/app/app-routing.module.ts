import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsDetailsComponent } from './persons-details/persons-details.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { Error404Component } from './error404/error404.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { PrivateComponent } from './private/private.component';
import { CompanyComponent } from './company/company.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { ProductsComponent } from './products/products.component';
import { MaterialComponent } from './material/material.component';
import { AnimComponent } from './anim/anim.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  { path: '', redirectTo: '/details', pathMatch: 'full' },
  { path: 'details', component: PersonsDetailsComponent },
  { path: 'salary', component: SinglePersonComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: 'private', component: PrivateComponent },
      { path: 'company', component: CompanyComponent },
    ],
  },
  { path: 'todo', component: TodoComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'rxjs1', component: Rxjs1Component },
  {path:'tdf', component:TdfComponent},
  {path:'mdf', component:MdfComponent},
  {path:'products', component:ProductsComponent},
  {path:'material', component:MaterialComponent},
  {path:'anim', component:AnimComponent},
  {path:'lifecycle', component:LifecycleComponent},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
