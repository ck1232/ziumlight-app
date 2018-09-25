import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ProductFilterDialogComponent } from '../product-filter-dialog/product-filter-dialog.component';

@Component({
  selector: 'app-product-filter-mobile',
  templateUrl: './product-filter-mobile.component.html',
  styleUrls: ['./product-filter-mobile.component.css'],
})
export class ProductFilterMobileComponent implements OnInit {
  filterControl: FormControl = new FormControl();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
      const dialogRef = this.dialog.open(ProductFilterDialogComponent, {width: '500px'});
      dialogRef.afterClosed().subscribe(result => {
         console.log('dialog is closed');
      });
  }

  onResize(event) {
      const size = event.target.innerWidth; // window width
      if (size >= 992) {
          this.dialog.closeAll();
      }
  }
}
