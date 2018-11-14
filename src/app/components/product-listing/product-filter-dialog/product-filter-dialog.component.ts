import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-product-filter-dialog',
  templateUrl: './product-filter-dialog.component.html',
  styleUrls: ['./product-filter-dialog.component.css']
})
export class ProductFilterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductFilterDialogComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  applyFilterClick(): void {
      this.dialogRef.close();
  }

}
