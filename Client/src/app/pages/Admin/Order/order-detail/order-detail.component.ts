import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  product: any = []
  ProductList: IproductList[] = [
    { id: '1', quantity: 1, name: "keo", image: "https://elstar.themenate.net/img/products/product-2.jpg", price: 100, total: "1000" },
    { id: '2', quantity: 1, name: "keo", image: "https://elstar.themenate.net/img/products/product-2.jpg", price: 100, total: "1000" },
    { id: '3', quantity: 1, name: "keo", image: "https://elstar.themenate.net/img/products/product-2.jpg", price: 100, total: "1000" },
    { id: '4', quantity: 1, name: "keo", image: "https://elstar.themenate.net/img/products/product-2.jpg", price: 100, total: "1000" },
    { id: '5', quantity: 1, name: "keo", image: "https://elstar.themenate.net/img/products/product-2.jpg", price: 100, total: "1000" },
  ];
  Product: IproductUser =
    { _id: 3132, name: "Nam", image: "https://elstar.themenate.net/img/avatars/thumb-11.jpg", address: 'Hydrogen', email: "nambx1234@gmail.com", tel: '0393532042', payment_method: "Visa", total: "1000", date: "2014" };

  ngOnInit() {
  }
  constructor(private Data: ProductService) {
    this.Data.Get_Product().subscribe(data => {
      this.product = data;
    })
  }
  displayedColumns: string[] = ["image", "name", "price", "quantity", 'total'];
  dataSource = new MatTableDataSource<IproductList>(this.ProductList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface IproductList {
  id: string,
  quantity: number,
  name: string,
  image: string,
  price: number,
  total: string,
}

export interface IproductUser {
  _id: number,
  name: string,
  image: string,
  email: string,
  address: string;
  tel: string;
  payment_method: string;
  total: string;
  date: string;
}



