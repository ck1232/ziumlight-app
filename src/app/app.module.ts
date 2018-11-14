import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { ProductListingModule } from './components/product-listing/product-listing.module';
import { TemplateModule } from './template/template.module';
import { TemplateComponent } from './template/template/template.component';
import { ProductListingComponent } from './components/product-listing/product-listing/product-listing.component';
import { IndexModule } from './components/index/index.module';
import { IndexComponent } from './components/index/index/index.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    NguCarouselModule,
    // CarouselModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
