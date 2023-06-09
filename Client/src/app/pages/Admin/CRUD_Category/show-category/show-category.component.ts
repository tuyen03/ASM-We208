import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductService } from 'src/app/Service/product.service';
@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent {
  product : any = []
  constructor(private Data : ProductService){
    this.Data.Get_Category().subscribe(data => {
      this.product  = data;
    })
  }
  displayedColumns: string[] = ['Name_Category', 'Product', '_id',];
  dataSource = new MatTableDataSource<PeriodicElement>(this.product);
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  ngAfterViewInit() {
    this.product.paginator = this.paginator;
    console.log(this.dataSource.data);
  }
  Delete(id : any){
    this.Data.Delete_Category(id).subscribe(data =>{
      if (confirm("Are you sure you want to delete this")) {
        this.product.data = this.product.data.filter((data:any) => data._id != id);
      }
    })
  }
}
export interface PeriodicElement {
  _id : number,
  Name_Category: string;
  Product : string
}