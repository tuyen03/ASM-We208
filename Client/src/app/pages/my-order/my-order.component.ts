import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
  data: any[] = [];
  filterData: any[] = [];
  user: any;
  userId: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson); // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      console.log(this.user);
      this.userId = this.user._id;
      console.log(this.userId);
    }

    this.getOrders();
  }

  getOrders() {
    this.http.get<any>('http://localhost:8080/api/order')
      .subscribe(
        response => {
          this.data = response.data;
          console.log(this.data);

          this.filterOrders();
        },
        error => {
          console.error(error);
        }
      );
  }

  filterOrders() {
    this.filterData = this.data.filter(item => item.user_id === this.userId);
    console.log(this.filterData);

    this.filterData.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }

  deleteOrders(id: any) {
    const confirm = window.confirm('Are you sure you want to delete this order ');
    if (confirm) {
      this.http.delete<any>(`http://localhost:8080/api/order/${id}`)
        .subscribe(
          response => {
            console.log(response);
            alert('Xóa thành công')
            this.getOrders();
          },
          error => {
            console.error(error);
          }
        );
    }
  }


  updateStatus(id: any) {
    const newStatus: String = "Failed";
    const confirm = window.confirm('Are you sure you want to cancel your order?');
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
                alert('Delete Successfully!');
                this.getOrders();
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
}


