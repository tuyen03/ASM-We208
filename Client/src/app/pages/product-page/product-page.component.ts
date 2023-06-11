import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  Category : any = [];
  Data : any = [];
  CurrentData : any = [];
  Id = "6484925147a78159f1268ee3"
  FakeData : any = [];
  // this.Data.data.Product
  constructor(private Product : ProductService){
    this.Product.Get_Category().subscribe(data =>{
      this.Category = data;
    })
    this.Product.Get_Category_id_InterFace(this.Id).subscribe(data =>{
      this.FakeData = data;
      this.CurrentData = this.FakeData.data.Product;
    })
  }
  GetId_Category(_id : any){
    this.Product.Get_Category_id_InterFace(_id).subscribe(data =>{
      this.Data = data;
      this.CurrentData = this.Data.data.Product;
    })
  }
}
