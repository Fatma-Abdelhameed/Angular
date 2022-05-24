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
  ];
  editProduct:Product = new Product(0, '', '', '', '', 0, '');
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
  edit(id:number){
    for(let i = 0; i < this.products.length; i+=1){
      if(this.products[i].id == id){
        this.editProduct.name = this.products[i].name;
        this.editProduct.code = this.products[i].code;
        this.editProduct.available = this.products[i].available;
        this.editProduct.price = this.products[i].price;
        this.editProduct.image = this.products[i].image;
      }
    }
  }
  save(id:any){
    id = Number(id);
     for(let i = 0; i < this.products.length; i+=1){
      if(this.products[i].id == id){
        this.products[i].id = this.editProduct.id;
        this.products[i].name = this.editProduct.name;
        this.products[i].code = this.editProduct.code;
        this.products[i].available = this.editProduct.available;
        this.products[i].price = this.editProduct.price;
        this.products[i].image =this.editProduct.image ;
      }
    }
    this.editProduct.id = 0;
    this.editProduct.name = '';
    this.editProduct.code = '';
    this.editProduct.available = '';
    this.editProduct.price = '';
    this.editProduct.image = '';
  }
  delete(id:number){
    for(let i = 0; i < this.products.length; i+=1){
      if(this.products[i].id == id){
        if(confirm(`Are You Sure?! You are about to Delete ${this.products[i].name} Product`)){
          this.products.splice(i, 1)
        }
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
