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
}
 