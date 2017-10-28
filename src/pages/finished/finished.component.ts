import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list-services';
import { addComponent } from '../add/add.component';
import { detailsComponent } from '../details/details.component';

@Component({
    selector: 'app-finished',
    templateUrl: 'finished.component.html'
})

export class finishedComponent implements OnInit {
    constructor(private _wishListService: WishListService,
        private _navController: NavController) { }

    ngOnInit() { }

    seeDetails(list, idx) {
        this._navController.push(detailsComponent, { list, idx });
    }
}