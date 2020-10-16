// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Views
import { EditComponent } from './views/bundles/edit/edit.component';
import { ListComponent as BundlesListComponent } from './views/bundles/list/list.component';
import { GamesComponent } from './views/games/games.component';
import { ListComponent as WordsListComponent } from './views/words/list/list.component';

// Components
import { BackButtonComponent } from './components/general/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    // Views
    EditComponent,
    BundlesListComponent,
    GamesComponent,
    WordsListComponent,
    // Components
    BackButtonComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
