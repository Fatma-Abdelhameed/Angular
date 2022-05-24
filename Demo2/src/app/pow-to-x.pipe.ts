import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powToX'
})
export class PowToXPipe implements PipeTransform {

  transform(value: number, pow:number=1): unknown {
    return Math.pow(value, pow);
  }

}
