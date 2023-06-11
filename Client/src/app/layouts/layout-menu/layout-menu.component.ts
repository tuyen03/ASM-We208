import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.css']
})
export class LayoutMenuComponent {
  chill = true;
  megaMenuDD = true;
  products = [
    {
      title: 'Home',
      link:""
    },
    {
      title: 'OUR MENU',
      link:"product"
    },
    {
      title: 'BLOG',
      link:"product"
    }
  ]

  show() {
    this.chill = !this.chill;
  };
  MegaClick() {
    this.megaMenuDD = !this.megaMenuDD
  }
  Category: any = [];
  Data: any = [];
  CurrentData: any = [];
  Id = "6484925147a78159f1268ee3"
  FakeData: any = [];
  // this.Data.data.Product
  constructor(private Product: ProductService) {
    this.Product.Get_Category().subscribe(data => {
      this.Category = data;
    })
    this.Product.Get_Category_id_InterFace(this.Id).subscribe(data => {
      this.FakeData = data;
      this.CurrentData = this.FakeData.data.Product;
    })
    this.Product.Get_Category_id_InterFace("6485b352a1bb38e357da3fc1").subscribe(data => {
      this.Data = data;
      this.CurrentData = this.Data.data.Product;
    })
  }

}
