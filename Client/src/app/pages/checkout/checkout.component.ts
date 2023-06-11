import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  errorMessage: any = {};
  checkoutForm: FormGroup;
  cartData: any[] = [];
  totalAmount: any;
  user: any;
  userId: any;
  userData: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      name: [''],
      address: [''],
      tel: [''],
      payment_method: ['COD'],
      status: ['Pending'],
    });
  }

  ngOnInit(): void {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const userJson = localStorage.getItem('user');
    this.user = userJson;
    if (userJson) {
      const user = JSON.parse(userJson);
      // Lấy dữ liệu giỏ hàng từ localStorage dựa trên tài khoản người dùng
      const storedCartData = localStorage.getItem(user._id);
      if (storedCartData) {
        this.cartData = JSON.parse(storedCartData);
        this.userId = user._id;
        this.calculateTotalAmount();
      }
    }
  }

  calculateTotalAmount(): void {
    this.totalAmount = 0;
    this.cartData.forEach((product) => {
      const price = parseFloat(product.price);
      const quantity = product.quantity;
      const subtotal = price * quantity;
      this.totalAmount += subtotal;
    });
  }

  handleSubmit() {
    const confirm = window.confirm('Are you sure you want to order?')
    if (confirm) {
      const data = {
        name: this.checkoutForm.value.name || '',
        address: this.checkoutForm.value.address || '',
        tel: this.checkoutForm.value.tel || '',
        status: this.checkoutForm.value.status || '',
        user_id: this.userId,
        product_list: this.cartData,
        payment_method: this.checkoutForm.value.payment_method || '',
        total: JSON.stringify(this.totalAmount),
        date: this.getCurrentDate(),
      };
      console.log(data);

      this.http.post('http://localhost:8080/api/order', data)
        .subscribe(
          (response) => {
            console.log(response);
            alert("Order Success!");

            // Xóa giỏ hàng từ localStorage
            const userJson = localStorage.getItem('user');
            if (userJson) {
              const user = JSON.parse(userJson);
              localStorage.removeItem(user._id);
            }

            this.router.navigate(['my-order']);
          },
          (error) => {
            console.error(error);
            if (error.error && error.error.errors) {
              this.errorMessage = error.error.errors;
            }
          }
        );
    }

  }

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  clearFieldError(fieldName: string) {
    this.errorMessage[fieldName] = '';
  }
}
