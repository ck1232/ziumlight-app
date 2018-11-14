import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from '../product-view/product-view/product-view.component';
import { TemplateModule } from '../template/template.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateModule
  ],
  declarations: [ProductViewComponent, ProductDetailComponent, ProductDescComponent, ProductImageComponent]
})
export class ProductViewModule { }
