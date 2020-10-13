import {Pipe, PipeTransform} from '@angular/core';
import {Dude} from '../Dude';


/**
 * Works only with Dudes - array of Dude objects
 */

@Pipe({
  name: 'filterro',
  pure: true

})
export class FilterPipe implements PipeTransform {

  transform(arrayToFilter: Dude[], searchPhrase: string): Dude[] {

    if (!searchPhrase) {
      return arrayToFilter;
    }

    return arrayToFilter.filter(item => item.name.toLowerCase()
                        .indexOf(searchPhrase.toLowerCase() ) !== -1);

  }

}

