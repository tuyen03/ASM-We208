import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartData: any[] = [];
  user: any; // Thêm thuộc tính user
  totalAmount: number = 0;
  userId: any;
  count: number = 0;

  constructor() { }

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
        this.calculateTotalAmount();
        this.userId = user._id;
        this.count = this.cartData.length;
        console.log(this.count);

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
  getCartData() {
    // Lấy danh sách sản phẩm từ localStorage của người dùng
    const storedItems = localStorage.getItem(this.user._id);
    if (storedItems) {
      this.cartData = JSON.parse(storedItems);

    }
  }

  updateQuantity(event: any, itemId: string): void {
    const newQuantity = event.target.value;
    console.log(newQuantity);

    // Tìm vị trí của phần tử
    const index = this.cartData.findIndex(item => item.id === itemId);
    console.log(index);

    // Cập nhật giá trị mới của số lượng vào mảng giỏ hàng
    if (index !== -1) {
      this.cartData[index].quantity = newQuantity;
    }

    // Cập nhật lại dữ liệu giỏ hàng
    localStorage.setItem(this.userId, JSON.stringify(this.cartData));
    this.calculateTotalAmount();

  }

  removeCartItem(itemId: string): void {
    const confirm = window.confirm('Are you sure you want to remove!')
    if (confirm) {
      // Tìm vị trí của phần tử trong mảng cartData
      const index = this.cartData.findIndex(item => item.id === itemId);
      if (index !== -1) {
        // Xóa phần tử khỏi mảng cartData
        this.cartData.splice(index, 1);

        // Cập nhật lại dữ liệu giỏ hàng
        localStorage.setItem(this.userId, JSON.stringify(this.cartData));
        this.count = this.cartData.length;

        // Tính toán lại tổng số tiền
        this.calculateTotalAmount();
      }
    }
  }

  logout(): void {
    // Xóa dữ liệu 'user' trong local storage
    localStorage.removeItem('user');
  }
}

