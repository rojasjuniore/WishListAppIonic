import { Injectable } from '@angular/core';
import { List } from '../class/list';

@Injectable()
export class WishListService {

    Lists: List[] = [];
    constructor() {
        this.uploadData();
    }

    uploadData() {
        if (localStorage.getItem('data')) {
            this.Lists = JSON.parse(localStorage.getItem('data'));
        }
    }

    updateData() {
        localStorage.setItem('data', JSON.stringify(this.Lists));
    }

    addList(list: List) {
        this.Lists.push(list)
        this.updateData();
    }

    deleteData(idx: number) {
        this.Lists.splice(idx, 1);
        this.updateData();
    }
}