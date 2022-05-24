import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], char:string): string[] {
    let list:string[] = [];
    value.map(function(item){
      if(item.toLowerCase().includes(char)){
        list.push(item)
      }
    })
    return list;
  }

}
