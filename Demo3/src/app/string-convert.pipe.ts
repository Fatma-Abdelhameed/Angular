import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceString'
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string): unknown {
    if(value.includes('-')){
      value = value.replace('-', ' ')
    }
    return value;
  }

}
