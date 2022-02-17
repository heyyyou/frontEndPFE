import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalImages'
})
export class ModalImagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
