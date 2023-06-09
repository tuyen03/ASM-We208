import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
})
export class ShowProductComponent implements AfterViewInit {
  product : any = []
  constructor(private Data : ProductService){
    this.Data.Get_Product().subscribe(data => {
      this.product  = data;
    })
  }
  displayedColumns: string[] = ['Product_Name', 'Product_Price', 'Product_KG', 'Product_Image', "Product_Description", '_id',];
  dataSource = new MatTableDataSource<PeriodicElement>(this.product);
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  ngAfterViewInit() {
    this.product.paginator = this.paginator;
    console.log(this.dataSource.data);
  }
  Delete(id : any){
    this.Data.Delete_Product(id).subscribe(data =>{
      if (confirm("Are you sure you want to delete this")) {
        this.product.data = this.product.data.filter((data:any) => data._id != id);
      }
    })
  }
}
export interface PeriodicElement {
  _id : number,
  Product_Name: string;
  Product_Price: number;
  Product_KG : number;
  Product_Image: string;
  Product_Description: string;
}