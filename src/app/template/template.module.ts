import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbNodeComponent } from './breadcrumb-node/breadcrumb-node.component';
import { CapitalizePipe } from '../pipe/capitalize.pipe';
import { SearchComponent } from './search/search.component';
import { MatInputModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    BreadcrumbComponent,
    BreadcrumbNodeComponent,
    CapitalizePipe,
    SearchComponent],
  exports: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    BreadcrumbComponent,
    BreadcrumbNodeComponent
  ]
})
export class TemplateModule { }
