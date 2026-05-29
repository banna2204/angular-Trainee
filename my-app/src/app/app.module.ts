import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from './productService/product.service.service';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { Child2ComponentComponent } from './components/child2-component/child2-component.component';
import { UserActionComponent } from './components/user-action/user-action.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    EventBindingComponent,
    ParentComponentComponent,
    Child2ComponentComponent,
    UserActionComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }