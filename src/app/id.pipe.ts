import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from './interfaces/ship.interface';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(ship:Ship): string {
    return ship.url.replace(/\D/g, '');
  }

}
