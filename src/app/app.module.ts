import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { catService } from '../services/cat-service';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environments';




@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    //Initialize firebase for the entire app
    AngularFireModule.initializeApp(environment.firebase),

    //ANgularFire Database Module
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    //The rest
    StatusBar,
    SplashScreen,
    //ANgularFire Database Module
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    catService
  ]
})
export class AppModule {}
