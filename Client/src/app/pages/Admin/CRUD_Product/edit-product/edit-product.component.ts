import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  public Editor = ClassicEditor;
  public imageUrl: any;
  // FormData : any;
  Product_id : any = {};
  Category : any = [];
  constructor(private Product : ProductService, private form : FormBuilder, private Get_id : ActivatedRoute, private Router : Router){
    this.Get_id.params.subscribe(params =>{
      this.Product.Get_Product_Id(params).subscribe(data =>{
        this.Product_id = data;
        console.log(this.Product_id);
        this.FormData.patchValue({
          Product_Name : this.Product_id.data.Product_Name,
          Product_Price : this.Product_id.data.Product_Price,
          Product_KG : this.Product_id.data.Product_KG,
          Product_Description : this.Product_id.data.Product_Description,
          CategoryId : this.Product_id.data.CategoryId
        })
      })
    })
  }
  FormData = this.form.group({
    Product_Name : ["", [Validators.required]],
    Product_Price : [0, [Validators.required]],
    Product_KG : [0, [Validators.required]],
    Product_Description : ["", [Validators.required]],
    CategoryId : ["", Validators.required],
  })
  ngOnInit(){
    this.Product.Get_Category().subscribe(data =>{
       this.Category = data
       console.log(this.Category);
    });
  }
  async HandSubMit(){
    if (this.FormData.valid) {
       const fileInput: any = document.getElementById('fileInput');
       let name1:string = this.FormData.value.Product_Description!; 
       const parser = new DOMParser();
       const parsedData = parser.parseFromString(name1  , 'text/html');
       const plainText = parsedData.body.textContent;
       if (this.FormData.value) {
          const cloud_name = "dsbiugddk";
          const upload_preset = "demo-ECMA";
          const formData = new FormData();
          const file = fileInput.files[0];
          formData.append(`file`, file);
          formData.append('upload_preset', upload_preset);
          formData.append('cloud_name', cloud_name);
          formData.append('folder', 'Upload_ECMA1');
          const res = await axios
        .post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData)
        .then(res => res.data);
         this.imageUrl = await res.secure_url;
         const PostData : any = {
          _id : this.Product_id.data._id,
          Product_Name : this.FormData.value.Product_Name,
          Product_Price : this.FormData.value.Product_Price,
          Product_KG : this.FormData.value.Product_KG,
          Product_Image : this.imageUrl,
          Product_Description : plainText,
          CategoryId : this.FormData.value.CategoryId,
        }
        console.log(PostData);
        this.Product.Update_Product(PostData).subscribe((data) => {
          alert("Cập Nhật dữ liệu thành công");
          // this.Router.navigateByUrl("Admin/Show_Product");
        })
      }
    }else{
      alert("Xin vui lòng nhập lại")
    }
  }
}
