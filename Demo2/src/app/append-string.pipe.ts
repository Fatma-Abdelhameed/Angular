import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendString'
})
export class AppendStringPipe implements PipeTransform {

  transform(value: string, prefix:string = "KFS"): unknown {
    return prefix + " " + value;
  }

}
