import { Component } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  Category : any = [];
  Data : any = [];
  CurrentData : any = [];
  Id = "6484925147a78159f1268ee3"
  FakeData : any = [];
  //todo Menu
  Menu : any = [];
  CurrentMenu : any = [];
  // this.Data.data.Product
  constructor(private Product : ProductService){
    this.Product.Get_Category().subscribe(data =>{
      this.Category = data;
    })
    this.Product.Get_Category_id_InterFace(this.Id).subscribe(data =>{
      this.FakeData = data;
      this.CurrentData = this.FakeData.data.Product;
    })
    this.Product.Get_Product().subscribe(data =>{
      this.Menu = data;
        for (let index = 0; index < this.Menu.data.length; index++) {
          if (index >= 0  && index <= 7) {
            this.CurrentMenu.push(this.Menu.data[index]);
          }
          console.log( this.CurrentMenu);      
      }
    })
  }
  GetId_Category(_id : any){
    this.Product.Get_Category_id_InterFace(_id).subscribe(data =>{
      this.Data = data;
      this.CurrentData = this.Data.data.Product;

    })
  }
}
