import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[
    new Product(1, "Product1","gdn-0011", "5/24/2022", "50", 4, "1.jpg"),
    new Product(2, "Product2","gdn-0023", "5/24/2022", "75", 3, "2.jpg"),
    new Product(3, "Product3","gdn-0012", "5/24/2022", "140", 5, "3.jpg"),
    new Product(4, "Product4","gdn-0027", "5/24/2022", "90", 2, "4.jpg"),
  ]
  imageApear:boolean = false;
  buttonText = 'Show Images';
  keyWord:string='';
  showImage(){
    if(this.imageApear == false){
      this.imageApear = true;
      this.buttonText = 'Hide Images'
    }else{
      this.imageApear = false
      this.buttonText = 'Show Images'
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
