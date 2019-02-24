import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { AboutPage } from '../pages/about/about';
import { TerceraPage } from '../pages/tercera/tercera';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB6IuLXDqwLfriT525X4n_FhbIzsiIKKwA",
  authDomain: "ltaxis-app.firebaseapp.com",
  databaseURL: "https://ltaxis-app.firebaseio.com",
  projectId: "ltaxis-app",
  storageBucket: "ltaxis-app.appspot.com",
  messagingSenderId: "61719009053"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    TabsPage,
    PerfilPage,
    AboutPage,
    TerceraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    TabsPage,
    PerfilPage,
    AboutPage,
    TerceraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
