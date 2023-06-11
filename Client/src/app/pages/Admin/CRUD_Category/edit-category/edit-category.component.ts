import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { ProductService } from 'src/app/Service/product.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  public Editor = ClassicEditor;
  public imageUrl: any;
  // FormData : any;
  Category : any = [];
  constructor(private Product : ProductService, private form : FormBuilder, private Get_id : ActivatedRoute ){
    this.Get_id.params.subscribe(params =>{
      this.Product.Get_Category_id(params).subscribe(data => {
        this.Category = data;
        this.FormData.patchValue({
          Name_Category : this.Category.data.Name_Category,
        })
      })
    })
  }
  FormData = this.form.group({
    Name_Category : ["", [Validators.required]],
  })
  async HandSubMit(){
    if (!this.FormData.valid) {
      alert("Xin vui Lòng nhập lại")
    }else{
      const PostData : any = {
        _id : this.Category.data._id,
        Name_Category : this.FormData.value.Name_Category,
      }
      this.Product.Put_Product(PostData).subscribe(data => {
        alert("Thêm xửa thành công");
      })
    }
  }
}
