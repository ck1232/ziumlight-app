import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListingModule } from './product-listing/product-listing.module';
import { TemplateModule } from './template/template.module';
import { TemplateComponent } from './template/template/template.component';
import { ProductListingComponent } from './product-listing/product-listing/product-listing.component';
import { IndexModule } from './index/index.module';
import { ProductViewModule } from './product-view/product-view.module';
import { IndexComponent } from './index/index/index.component';
import { ProductViewComponent } from './product-view/product-view/product-view.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  {
      path: 'home',
      component: TemplateComponent,
      children: [
         {path: '',
             component: IndexComponent,
             outlet: 'content'
         }
      ]
  },
  {
    path: 'listing',
    component: TemplateComponent,
    children: [
      {path: '',
          component: ProductListingComponent,
          outlet: 'content'
      }
    ]
  },
  {
    path: 'product',
    component: TemplateComponent,
    children: [
      {path: '',
          component: ProductViewComponent,
          outlet: 'content'
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TemplateModule,
    ProductListingModule,
    IndexModule,
    ProductViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
