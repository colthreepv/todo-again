import {Map} from 'immutable';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mapToArray'})
export class MapToArrayPipe implements PipeTransform {
  transform (map: Map<any, any>, args: any[]): any[] {
    return map.toArray();
  }
}
