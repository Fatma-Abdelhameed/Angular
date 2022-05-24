import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './_models/product.model';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], char:string): Product[] {
    let list:Product[] = [];
    value.map(function(item){
      if(item.name.toLowerCase().includes(char)){
        list.push(item)
      }
    })
    return list;
  }

}
