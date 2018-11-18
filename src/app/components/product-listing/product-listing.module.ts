import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { ProductFilterMobileComponent } from './product-filter-mobile/product-filter-mobile.component';
import { ProductSortMobileComponent } from './product-sort-mobile/product-sort-mobile.component';
import { ProductPaginationComponent } from './product-pagination/product-pagination.component';
import { ProductComponent } from './product/product.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { ShippingFilterComponent } from './shipping-filter/shipping-filter.component';
import { ProductFilterDialogComponent } from './product-filter-dialog/product-filter-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NouisliderModule } from 'ng2-nouislider';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatOptionModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplateModule } from 'src/app/template/template.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NouisliderModule
  ],
  declarations: [
    ProductListingComponent,
    ProductFilterComponent,
    ProductSortComponent,
    ProductFilterMobileComponent,
    ProductSortMobileComponent,
    ProductPaginationComponent,
    ProductComponent,
    PriceFilterComponent,
    ShippingFilterComponent,
    ProductFilterDialogComponent],
  exports: [
    ProductListingComponent
  ],
  entryComponents: [
    ProductFilterDialogComponent
  ]
})
export class ProductListingModule { }
