import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { ProductService } from 'src/app/Service/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public Editor = ClassicEditor;
  public imageUrl: any;
  // FormData : any;
  Category : any = [];
  constructor(private Product : ProductService, private form : FormBuilder){

  }
  FormData = this.form.group({
    Product_Name : ["", [Validators.required]],
    Product_Price : [0, [Validators.required]],
    Product_KG : [0, [Validators.required]],
    Product_Description : ["", [Validators.required]],
  })
  ngOnInit(){
    this.Product.Get_Category().subscribe(data =>{
       this.Category = data
       console.log(this.Category);
    });
  }
  async HandSubMit(){
    console.log("aaaa");
    if (this.FormData.valid) {
         console.log("aaaa");
       const fileInput: any = document.getElementById('fileInput');
       const Select: any = document.getElementById('Select');
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
          Product_Name : this.FormData.value.Product_Name,
          Product_Price : this.FormData.value.Product_Price,
          Product_KG : this.FormData.value.Product_KG,
          Product_Image : this.imageUrl,
          Product_Description : plainText,
          CategoryId : Select.value
        }
        console.log(PostData);
        // this.Product.Add_Product(PostData).subscribe((data) => {
        //   console.log(data);
        //   alert("Them Thanh cong")
        // });
      }
    }
  }
}
