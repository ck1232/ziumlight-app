import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListingModule } from './product-listing/product-listing.module';
import { TemplateModule } from './template/template.module';
import { TemplateComponent } from './template/template/template.component';
import { ProductListingComponent } from './product-listing/product-listing/product-listing.component';
import { IndexModule } from './index/index.module';
import { IndexComponent } from './index/index/index.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
