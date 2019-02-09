import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
public appMenu = [
    {title: 'Home', url: '/home', icon:'home'},
    {title: 'Events', url: '/createevent', icon:'create'},
    {title: 'News Feed', url: '/newsfeed', icon:'paper'},
    {title: 'Tracking', url: '/home', icon:'pin'},
    {title: 'Contacts', url: '/home', icon:'contact'},
    {title: 'Settings', url: '/home', icon:'settings'}

];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
