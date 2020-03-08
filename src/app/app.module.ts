import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { ProductComponent } from './components/admin/product/product.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderComponent } from './components/admin/order/order.component';
import { UserComponent } from './components/admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProductComponent,
    ProductComponent,
    AdminComponent,
    OrderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
