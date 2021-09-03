import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '@core/interface/user-data';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {


  transform(userData: any, args: string): any {
    const finalFilter = []
    for (const filter of userData) {
      if (filter.first_name.indexOf(args) !== -1) {
        finalFilter.push(filter)
      }
    }
    return finalFilter;
  }




}