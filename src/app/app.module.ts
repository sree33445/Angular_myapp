import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PersonsDetailsComponent } from './persons-details/persons-details.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { Error404Component } from './error404/error404.component';
import { AgePipe } from './age.pipe';
import { ReversePipe } from './reverse.pipe';
import { SquarePipe } from './square.pipe';
import { MultiplyPipe } from './multiply.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { PrivateComponent } from './private/private.component';
import { CompanyComponent } from './company/company.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { ProductsComponent } from './products/products.component';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { MaterialComponent } from './material/material.component';
import { MatButtonModule } from '@angular/material/button';
import { AnimComponent } from './anim/anim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifechildComponent } from './lifechild/lifechild.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    PersonsDetailsComponent,
    SinglePersonComponent,
    Error404Component,
    AgePipe,
    ReversePipe,
    SquarePipe,
    MultiplyPipe,
    TodoComponent,
    UserComponent,
    PrivateComponent,
    CompanyComponent,
    RxjsComponent,
    Rxjs1Component,
    TdfComponent,
    MdfComponent,
    ProductsComponent,
    ProductWidgetComponent,
    MaterialComponent,
    LifecycleComponent,
    LifechildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatButtonModule,
    AnimComponent,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
