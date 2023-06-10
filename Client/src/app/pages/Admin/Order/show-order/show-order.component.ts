import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent {
  product : any = []
  ELEMENT_DATA: PeriodicElement[] = [
    {_id: 1, address: 'Hydrogen', tel: '1.0079', user_id: 'H', product_list : [{id : '1', quantity : 1, name : "keo", image : "anh1", price : 100}] , payment_method : "Visa", total : "1000", status : "Pending", date : "2014"},
    {_id: 2, address: 'Hydrogen', tel: '1.0079', user_id: 'T', product_list : [{id : '1', quantity : 1, name : "keo", image : "anh1", price : 100}] , payment_method : "Visa", total : "1000", status : "Pending", date : "2014"},
    {_id: 3, address: 'Hydrogen', tel: '1.0079', user_id: 'U', product_list : [{id : '1', quantity : 1, name : "keo", image : "anh1", price : 100}] , payment_method : "Visa", total : "1000", status : "Pending", date : "2014"},
    {_id: 4, address: 'Hydrogen', tel: '1.0079', user_id: 'I', product_list : [{id : '1', quantity : 1, name : "keo", image : "anh1", price : 100}] , payment_method : "Visa", total : "1000", status : "Pending", date : "2014"},
    {_id: 5, address: 'Hydrogen', tel: '1.0079', user_id: 'R', product_list : [{id : '1', quantity : 1, name : "keo", image : "anh1", price : 100}] , payment_method : "Visa", total : "1000", status : "Pending", date : "2014"},
  ];
  ngOnInit(){
    console.log(this.ELEMENT_DATA[0].product_list.length);
    console.log(this.dataSource);
  }
  
  
  constructor(private Data : ProductService){
    this.Data.Get_Product().subscribe(data => {
      this.product  = data;
    })
  }
  displayedColumns: string[] = ['address', 'tel', 'user_id', 'product_list', "payment_method",'total','date', "status" , '_id',];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.product.paginator = this.paginator;
  //   console.log(this.dataSource.data);
  // }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
  address: string;
  tel: string;
  user_id : string;
  product_list: [{id : string, quantity : number, name : string , image : string , price : number}];
  payment_method: string;
  total : string;
  date : string;
  status : string;
} 


