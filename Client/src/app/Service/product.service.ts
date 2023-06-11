import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
   Add_Product(data : any){
    return this.http.post("http://localhost:8080/api/product", data);
    }
  Get_Product(){
  return this.http.get("http://localhost:8080/api/product");
  }
  Get_Product_Id({id} : any){
    return this.http.get("http://localhost:8080/api/product/"+id);
    }
  Delete_Product(id : any){
    return this.http.delete("http://localhost:8080/api/product/"+id);
  }
  Update_Product(data : any){
    return this.http.put(`http://localhost:8080/api/product/${data._id}`, data);
  }
  Post_Category(data : any){
    return this.http.post(`http://localhost:8080/api/category`, data);
  }
  Put_Product(data : any){
    return this.http.put(`http://localhost:8080/api/category/${data._id}`, data);
  }
  Get_Category(){
    return this.http.get(`http://localhost:8080/api/category`);
  }
  Get_Category_id({id} : any){
    return this.http.get(`http://localhost:8080/api/category/` + id);
  }
  Get_Category_id_InterFace(id : any){
    console.log(id);
    return this.http.get(`http://localhost:8080/api/category/${id}`);
  }
  Delete_Category(id : any){
    return this.http.delete("http://localhost:8080/api/category/"+id);
  }
}
 