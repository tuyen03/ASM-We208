import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductService } from 'src/app/Service/product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent {
  product : any = []
  Order : any = [];
  FakeOrder : any = [];
  dataSource : any;
  constructor(private Data : ProductService, private http: HttpClient){
    this.Data.Get_Product().subscribe(data => {
      this.product  = data;
    })
    this.Data.Get_Order().subscribe(data => {
      this.Order = data;
      this.FakeOrder = this.Order.data;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.FakeOrder);
      this.dataSource.paginator = this.paginator;
    })
  }
  displayedColumns: string[] = ['address', 'tel', 'name' , 'user_id', "payment_method",'total','date', "status" , '_id',];

  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
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
  name : string,
  address: string;
  tel: string;
  user_id : string;
  product_list: [{id : string, quantity : number, name : string , image : string , price : number}];
  payment_method: string;
  total : string;
  date : string;
  status : string;
}

