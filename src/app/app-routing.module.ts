import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { CreateNewProductServiceModule } from './services/create-new-product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-product', component: ProductFormComponent }]), ProductFormComponentModule, CreateNewProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
