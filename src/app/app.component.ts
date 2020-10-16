import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = -1;
  public appPages = [
    {
      title: 'Games',
      url: '/games',
      icon: 'game-controller'
    },
    {
      title: 'Words Bundles',
      url: '/bundles',
      icon: 'book'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects;

        if (path !== undefined) {
          const foundIndex = this.appPages.findIndex(page => page.url === path);
          if (foundIndex > -1) {
            this.selectedIndex = foundIndex;
          }
        }
      }
    });
  }
}
