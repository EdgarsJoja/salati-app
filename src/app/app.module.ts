import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Views
import { EditComponent } from './views/words/bundles/edit/edit.component';
import { ListComponent } from './views/words/bundles/list/list.component';
import { GamesComponent } from './views/games/games.component';

// Components
import { BackButtonComponent } from './components/general/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    // Views
    EditComponent,
    ListComponent,
    GamesComponent,
    // Components
    BackButtonComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
