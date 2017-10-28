import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list-services';
import { detailsComponent } from '../details/details.component';
import { addComponent } from '../add/add.component';


@Component({
    selector: 'app-slopes',
    templateUrl: 'slopes.component.html'
})

export class slopesComponent implements OnInit {
    constructor(private _wishListService: WishListService,
        private _navController: NavController) {
    }

    ngOnInit() { }

    goToAdd() {
        this._navController.push(addComponent)
    }

    seeDetails(list, idx) {
        this._navController.push(detailsComponent, { list, idx });
    }
}