import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list-services';

import { List, listItem } from '../../app/class/index';

@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html'
})

export class detailsComponent implements OnInit {

    idx: number;
    list: List;

    constructor(public _navController: NavController,
        public _navParams: NavParams,
        public WishListService: WishListService,
        public alertCtrl: AlertController) {
        this.idx = this._navParams.get('idx');
        this.list = this._navParams.get('list');
    }

    ngOnInit() { }

    update(item: listItem) {
        item.completed = !item.completed;
        let allmarked = true;
        for (let item of this.list.items) {
            if (!item.completed) {
                allmarked = false;
                break
            }
        }
        this.list.completed = allmarked;
        this.WishListService.updateData();
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: this.list.name,
            message: 'Desea Borrar la lista',
            buttons: [
                {
                    text: 'NO'
                },
                {
                    text: 'SI',
                    handler: () => {
                        this.WishListService.deleteData(this.idx);
                        this._navController.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}