import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  cartItems: any;
  product: any;
  quantity: number = 1;
  user: any; // Thêm thuộc tính user
  _id: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson);
    }
    this.getProductData();
  }

  getProductData() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      const url = `http://localhost:8080/api/product/${productId}`;

      this.http.get(url).subscribe(
        (response: any) => {
          this.product = response.data;
          console.log(this.product);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  addToCart(productId: number) {
    const user = localStorage.getItem('user');
    if (user) {
      // Lấy danh sách sản phẩm từ localStorage của người dùng
      const storedItems = localStorage.getItem(this.user._id);
      this.cartItems = storedItems ? JSON.parse(storedItems) : [];

      // Tìm sản phẩm trong giỏ hàng
      const product = this.cartItems.find((item: any) => item.id === productId);

      if (product) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên theo số lượng nhập từ form
        product.quantity += this.quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào danh sách với số lượng từ form
        const newProduct = {
          id: productId,
          quantity: this.quantity,
          name: this.product.Product_Name,
          image: this.product.Product_Image,
          price: this.product.Product_Price
        };
        this.cartItems.push(newProduct);
      }

      // Lưu danh sách sản phẩm vào localStorage của người dùng
      localStorage.setItem(this.user._id, JSON.stringify(this.cartItems));
      const confirm = window.confirm("Added to your cart! Check now!")
      if (confirm) {
        this.router.navigate(['cart'])
      }
    } else {
      alert('Vui long đăng nhập')
    }


  }
}
