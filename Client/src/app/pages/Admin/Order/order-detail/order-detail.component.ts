import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductService } from 'src/app/Service/product.service';
import { ActivatedRoute, Router ,ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  orderId: any;
  orderData: any;


  constructor(private route: ActivatedRoute, private productService: ProductService, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getOrderDetail(id);
      }
    });
  }

  getOrderDetail(orderId: string) {
    this.http.get<any>(`http://localhost:8080/api/order/${orderId}`).subscribe(data => {
      this.orderData = data.data;

      console.log(this.orderData); // In ra chi tiết đơn hàng trong console
    });
  }

  updateStatus(id: any) {
    const newStatus: String = "Paid";
    const confirm = window.confirm('Are you sure you want to update this status?');
    if (confirm) {
      this.getOrderById(id).subscribe(
        order => {
          console.log(order);

          const updatedOrder = {
            name: order.data.name,
            address: order.data.address,
            tel: order.data.tel,
            user_id: order.data.user_id,
            product_list: order.data.product_list,
            payment_method: order.data.payment_method,
            total: order.data.total,
            date: order.data.date,
            status: newStatus
          };

          this.http.put<any>(`http://localhost:8080/api/order/${id}`, updatedOrder)
            .subscribe(
              response => {
                console.log(response);
                alert('Update Successfully!');
                // this.getOrders();
              },
              error => {
                console.error(error);
              }
            );
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  getOrderById(id: any) {
    return this.http.get<any>(`http://localhost:8080/api/order/${id}`);
  }

  displayedColumns: string[] = ["image", "name", "price", "quantity", 'total'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
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



