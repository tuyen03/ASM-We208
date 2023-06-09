import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { ProductService } from 'src/app/Service/product.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  public Editor = ClassicEditor;
  public imageUrl: any;
  // FormData : any;
  Category : any = [];
  constructor(private Product : ProductService, private form : FormBuilder){
    this.Product.Get_Category().subscribe(category =>{
      this.Category = category;
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
        Name_Category : this.FormData.value.Name_Category,
      }
      for (const iterator of this.Category.data) {
        console.log(iterator.Name_Category);
        if (PostData.Name_Category == iterator.Name_Category) {
          alert("Danh mục Đã Tồn tại");
          return;
        }else{
          console.log(PostData);
          this.Product.Post_Category(PostData).subscribe(data => {
            alert("Thêm danh mục thành công");
          })
          return;
        }
      }
    }

  }
}
