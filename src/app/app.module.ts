import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Services

import { WishListService } from './services/wish-list-services';

//Pipes
import { placeHolderPipe } from './pipes/placeholder.pipes';
import { slopesPipe } from './pipes/slopes.pipes';




import { TabsPage } from '../pages/tabs/tabs';
import { finishedComponent } from '../pages/finished/finished.component';
import { slopesComponent } from '../pages/slopes/slopes.component';
import { addComponent } from '../pages/add/add.component';
import { detailsComponent } from '../pages/details/details.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    placeHolderPipe,
    slopesPipe,
    TabsPage,
    finishedComponent,
    slopesComponent,
    addComponent,
    detailsComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    finishedComponent,
    slopesComponent,
    addComponent,
    detailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
