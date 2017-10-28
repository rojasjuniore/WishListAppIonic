import { Component } from '@angular/core';

import { slopesComponent } from '../slopes/slopes.component';
import { finishedComponent } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = slopesComponent;
  tab2Root = finishedComponent;

  constructor() {

  }
}
