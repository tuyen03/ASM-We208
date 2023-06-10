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
  dataSource : any;
  constructor(private Data : ProductService){
    this.Data.Get_Product().subscribe(data => {
      this.product  = data;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.product.data);
      this.dataSource.paginator = this.paginator;
    })
  }
  displayedColumns: string[] = ['Product_Name', 'Product_Price', 'Product_KG', 'Product_Image', "Product_Description", '_id',];
  ngOnInit(){
    console.log(this.dataSource);
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
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