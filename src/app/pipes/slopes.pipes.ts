import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../class/list';

@Pipe({
    name: 'slopes',
    pure: false
})

export class slopesPipe implements PipeTransform {
    transform(lists: List[], state: boolean = false): List[] {
        let newList: List[] = [];
        for (let list of lists) {
            if (list.completed == state) {
                newList.push(list);
            }
        }
        return newList;
    }
}