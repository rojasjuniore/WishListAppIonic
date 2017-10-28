import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { WishListService } from '../../app/services/wish-list-services';
import { List, listItem } from '../../app/class/index';

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html'
})

export class addComponent implements OnInit {

    nameList = '';
    nameItem = '';
    thereAreItems = false;
    items: listItem[] = [];


    constructor(public _navController: NavController,
        public alertCtrl: AlertController,
        public _wishListService: WishListService) { }

    ngOnInit() {
    }

    add() {
        if (this.nameItem.length == 0) {
            return
        }
        this.thereAreItems = true;
        let item = new listItem()
        item.name = this.nameItem;
        this.items.push(item)
        this.nameItem = "";
    }

    delete(id: number) {
        this.items.splice(id, 1)
        if (this.items.length == 0) {
            this.thereAreItems = false;
        }
    }

    saveList() {
        if (this.nameList.length == 0) {
            this.showAlert();
            return
        }

        let list = new List(this.nameList);
        list.items = this.items
        // this._wishListService.Lists.push(list)
        this._wishListService.addList(list)
        this._navController.pop();
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Hola.',
            subTitle: 'El nombre de la lista es Necesario',
            buttons: ['OK']
        });
        alert.present();
    }
}